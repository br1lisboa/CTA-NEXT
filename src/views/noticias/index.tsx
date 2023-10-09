// components/ListaNoticias.tsx
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import ListaNoticiasFlex, {Noticia,} from "@/components/listaNoticiasFlex/ListaNoticiasFlex";
import Spinner from "@/components/spinner/Spinner";

// Página NoticiasPage

export function NoticiasPage() {
    const [noticias, setNoticias] = useState<Noticia[]>([]); // Cambiado a Noticia[]
    const [opiniones, setOpiniones] = useState<Noticia[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosRef = collection(db, "noticias");
                const querySnapshot = await getDocs(productosRef);
                const docs = querySnapshot.docs.map((doc) => doc.data() as Noticia); // Cambiado a Noticia
                setNoticias(docs);

                const opinionesRef = collection(db, "opiniones");
                const opinionesSnapshot = await getDocs(opinionesRef);
                const opinionesData = opinionesSnapshot.docs.map(
                    (doc) => doc.data() as Noticia
                );
                setOpiniones(opinionesData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from Firestore: ", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="bg-white h-full">
            <div className="flex gap-2 flex-row p-4 justify-evenly pt-20">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                    <ListaNoticiasFlex text="NOTICIAS" array={noticias} />
                    <ListaNoticiasFlex text="OPINIONES" array={opiniones} />
                    </>
                )}
            </div>
        </div>
    );
}
