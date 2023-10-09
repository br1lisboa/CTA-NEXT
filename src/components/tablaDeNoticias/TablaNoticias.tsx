import { useState, useEffect } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc, getDoc } from "firebase/firestore";
import { ref, deleteObject, } from "firebase/storage"
import { db, storage } from "../../firebase/config";
import Spinner from "@/components/spinner/Spinner";
import Swal from 'sweetalert2';

interface Entrada {
    id: string;
    titulo: string;
    imagen: string;
    cuerpo: string;
    categoria: string;
}

export default function TablaEntradas() {
    const [entradas, setEntradas] = useState<Entrada[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const noticiasRef = collection(db, "noticias");
                const opinionesRef = collection(db, "opiniones");

                const noticiasSnapshot = await getDocs(noticiasRef);
                const opinionesSnapshot = await getDocs(opinionesRef);

                const noticiasData = noticiasSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Entrada[];

                const opinionesData = opinionesSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Entrada[];

                const mergedData = [...noticiasData, ...opinionesData];
                setEntradas(mergedData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from Firestore: ", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleEliminar = async (id: string, categoria: string) => {
        try {
            console.log("Intentando eliminar entrada con ID:", id);
            console.log("Categoría:", categoria);

            // Usamos la categoría como nombre de la colección
            const docRef = doc(db, categoria, id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                await deleteDoc(docRef);
                Swal.fire('Entrada eliminada', 'La entrada ha sido eliminada exitosamente.', 'success');

                // Eliminar la imagen de Firebase Storage
                const storageRef = ref(storage, `${id}/image`);
                await deleteObject(storageRef);

                // Actualizar el estado para reflejar la eliminación
                setEntradas(entradas.filter(entrada => entrada.id !== id));
            } else {
                console.error(`No se encontró el documento con ID: ${id} en la colección ${categoria}`);
            }
        } catch (error) {
            Swal.fire('Error', 'Hubo un error al eliminar la entrada.', 'error');
        }
    };



    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Link href={"/admin/create"} className="rounded bg-blue-600 p-2 text-white mb-4 inline-block">
                        Crear nuevo
                    </Link>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <tbody>
                                {entradas.map(entrada => (
                                    <tr key={entrada.id} className="text-gray-800">
                                        <td className="py-2 px-4 border-b">{entrada.titulo}</td>
                                        <td className="py-2 px-4 border-b">{entrada.cuerpo}</td>
                                        <td className="py-2 px-4 border-b">{entrada.id}</td>
                                        <td className="py-2 px-4 border-b">{entrada.categoria}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button
                                                onClick={() => handleEliminar(entrada.id, entrada.categoria)}
                                                className="rounded bg-red-500 p-2 text-white"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    );
}



