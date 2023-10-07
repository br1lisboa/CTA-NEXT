import { useState, useEffect } from "react";
import AsideNoticia from "../asideNoticia/AsideNoticia";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config";
import Spinner from "@/components/spinner/Spinner";


interface Noticia {
    id: string;
    titulo: string;
    imagen: string;
    cuerpo: string;
}

export default function AsideNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosRef = collection(db, "noticias");
                const querySnapshot = await getDocs(productosRef);
                const docs = querySnapshot.docs.map(doc => doc.data() as Noticia);
                setNoticias(docs);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from Firestore: ", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <aside className="w-1/4 p-4 border rounded-md flex flex-col ">
            <div>
                <h2 className="text-[#36B776] font-bold mb-4">OTRAS NOTICIAS</h2>
            </div>
            <div className="flex flex-col gap-4">
                {loading ? (
                    <Spinner />
                ) : (
                    noticias.map((noticia) => (
                        <AsideNoticia
                            key={noticia.id}
                            id={noticia.id}
                            titulo={noticia.titulo}
                        />
                    )))
                }
            </div>
        </aside>

    )
}