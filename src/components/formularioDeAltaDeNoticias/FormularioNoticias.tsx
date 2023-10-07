import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Boton } from "../boton/Boton"
import { doc, setDoc } from "firebase/firestore"
import { db, storage } from "@/firebase/config"
import { ref, uploadBytes, getDownloadURL, StorageReference } from "firebase/storage"
import { useRouter } from 'next/router';

interface ProductValues {
    titulo: string;
    cuerpo: string;
    id: string;
    imagen?: string;  // Hacerla opcional
    categoria: string
}
const storageRef: StorageReference = ref(storage);

const createProduct = async (values: ProductValues, file: File | null, categoria: string) => {
    if (file) {
        const fileRef = ref(storageRef, `${values.id}/image`);
        const fileSnapshot = await uploadBytes(fileRef, file);
        const fileURL = await getDownloadURL(fileSnapshot.ref);
        values.imagen = fileURL;
    }

    // Agregamos la categoría al objeto values
    values.categoria = categoria;

    const docRef = doc(db, categoria === 'noticias' ? 'noticias' : 'opiniones', values.id);

    try {
        await setDoc(docRef, values);
        console.log("Producto creado exitosamente");
    } catch (error) {
        console.error("Error al crear el producto:", error);
    }
};

const CreateForm: React.FC = () => {
    const router = useRouter();
    const [values, setValues] = useState<ProductValues>({
        titulo: '',
        cuerpo: '',
        id: '',
        categoria: ''
    });
    const [file, setFile] = useState<File | null>(null);
    const [tipoEntrada, setTipoEntrada] = useState<'noticias' | 'opiniones'>('noticias');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
            categoria: tipoEntrada,  // Agregamos la categoría aquí
        });
    };;

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createProduct(values, file, tipoEntrada);
    }
    const handleVolverAtras = () => {
        router.back();
    };


    return (

        <div className="container mx-auto mt-6 max-w-xl p-8 border border-gray-300 rounded">
            <h1 className="text-xl font-bold mb-4">Alta de noticias</h1>

            <form onSubmit={handleSubmit} className="my-4">
                <div className="mb-4">
                    <label className="block mb-1">ID:</label>
                    <input
                        type="text"
                        value={values.id}
                        required
                        className="p-2 rounded w-full border border-blue-100"
                        name="id"
                        onChange={handleInputChange}
                    />
                </div>
                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                <div className="mb-4">
                    <label className="block mb-1">Título:</label>
                    <input
                        type="text"
                        value={values.titulo}
                        required
                        className="p-2 rounded w-full border border-blue-100"
                        name="titulo"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Cuerpo:</label>
                    <textarea
                        value={values.cuerpo}
                        required
                        className="resize-none p-2 rounded w-full border border-blue-100 h-40"
                        name="cuerpo"
                        style={{ height: '400px' }}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Tipo de entrada:</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="noticia"
                                checked={tipoEntrada === 'noticias'}
                                onChange={() => setTipoEntrada('noticias')}
                            />
                            Noticia
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="opinion"
                                checked={tipoEntrada === 'opiniones'}
                                onChange={() => setTipoEntrada('opiniones')}
                            />
                            Opinión
                        </label>
                    </div>
                </div>

                <div className="flex gap-2 justify-center">
                    <Boton
                        className='text-[#36B776] border border-[#36B776]'
                        type="button"
                        onClick={handleVolverAtras}  // Llama a la función de volver atrás
                    >
                        Volver Atrás
                    </Boton>
                    <Boton className='text-[#36B776] border border-[#36B776]' type="submit">Enviar</Boton>
                </div>
            </form>
        </div>
    )
}


export default CreateForm
