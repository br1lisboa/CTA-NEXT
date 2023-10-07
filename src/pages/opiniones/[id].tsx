import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { MainLayout } from '@/layouts/MainLayout';

type Opinion = {
  id: string;
  titulo: string;
  imagen: string;
  cuerpo: string;
};

interface OpinionDetalleProps {
  opinion: Opinion;
}

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;

  try {
    // Consulta la opinión en la colección "opiniones" usando su ID
    const opinionDoc = doc(db, 'opiniones', id);
    const opinionSnap = await getDoc(opinionDoc);

    if (opinionSnap.exists()) {
      const opinion = opinionSnap.data() as Opinion;
      return {
        props: {
          opinion,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error('Error al obtener la opinión:', error);
    return {
      notFound: true,
    };
  }
}

const OpinionDetalle = (props : OpinionDetalleProps) => {
  const { opinion } = props;

  return (
    <MainLayout>
      <div className="container mx-auto mt-10 p-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src={opinion.imagen} alt={opinion.titulo} className="w-full h-auto mb-6" />
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold mb-4">{opinion.titulo}</h1>
            <p className="text-gray-700">{opinion.cuerpo}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OpinionDetalle;
