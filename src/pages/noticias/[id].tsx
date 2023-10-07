
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import { MainLayout } from '@/layouts/MainLayout';

type Noticia = {
  id: string;
  titulo: string;
  imagen: string;
  cuerpo: string;
}
interface NoticiaDetalleProps {
  noticia: Noticia;
}

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    // Consulta la noticia en la colección "noticias" usando su ID
    const noticiaDoc = doc(db, 'noticias', id);
    const noticiaSnap = await getDoc(noticiaDoc);

    if (noticiaSnap.exists()) {
      const noticia = noticiaSnap.data();
      return {
        props: {
          noticia,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error('Error al obtener la noticia:', error);
    return {
      notFound: true,
    };
  }
}

const NoticiaDetalle = (props : NoticiaDetalleProps) => {
  const {noticia} = props

    return (
        <MainLayout>
        <div className="container mx-auto mt-10 p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src={noticia.imagen} alt={noticia.titulo} className="w-full h-auto mb-6" />
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>
            <p className="text-gray-700">{noticia.cuerpo}</p>
          </div>
        </div>
      </div>
        </MainLayout>
      );
};

export default NoticiaDetalle;
