import Separator from "@/components/separator/Separator";
import { Boton } from "@/components/boton/Boton";
import GoogleMap from "@/components/googleMaps/GoogleMaps";

const descargarPDF = () => {
    const link = document.createElement('a');
    link.href = '/fichaAdmision/Ficha.pdf';  // Ruta al archivo PDF en tu directorio público
    link.download = 'Ficha_De_Admision.pdf';  // Nombre con el que se descargará
    link.click();
  };


export function AfiliacionContacto() {
    return (
        <div className="bg-white h-full pt-20 p-10">
            <Separator text="FICHA DE AFILIASIÓN A LA CTA AUTÓNOMA" className="text-lg" />
            <p className="text-[#878080] mb-20">
                La afiliación a la Central de Trabajadores de la Argentina se rige por
                el art. N° 4 del estatuto social.{" "}
            </p>
            <h2 className="text-[#36B776] text-center font-bold text-lg">
                {" "}
                QUIÉRES AFILIARTE A LA CTA AUTÓNOMA ?
            </h2>
            <div className="text-center my-5">
                <Boton  onClick={descargarPDF} className="text-[#36B776] border border-[#36B776]"  type='button'>
                    Descargar Ficha de Afiliación
                </Boton>
            </div>
            <h2 className="font-bold my-10">
                Una vez bajada y completada la ficha deberá ser remitida a:
                afiliaciones@ctaa.org.ar y nos pondremos en contacto para la vinculación
                a la CTA Autónoma más cercana a tu domicilio.
            </h2>
            <p className="text-justify my-10">
                Artículo 4: La afiliación a la CTA Autónoma es un acto voluntario y
                libre de trabajadores mayores de 14 años comprendidos en el ámbito
                subjetivo de actuación, sin más límite que la aceptación y práctica de
                los objetivos señalados en la Declaración de Principios y en el capítulo
                de los Objetivos y Fines, y el respeto por los presentes estatutos.
            </p>
            <p className="text-justify">
                La afiliación se efectivizará directamente por el trabajador ante la
                organización local, provincial regional o nacional de la CTA Autónoma o
                a través del sindicato, unión, asociación o federación de cualquier
                tipo, afiliada a la CTA Autónoma. La afiliación de una entidad sindical
                de ámbito territorial nacional o provincial deberá ser aceptada por la
                Comisión Ejecutiva Nacional.
            </p>

            <Separator text="INFORMACIÓN DE CONTACTO" className="mt-20 text-lg" />
            <h2 className="text-[#36B776] text-center font-bold text-lg">COMUNICATE CON NOSOTROS</h2>
            <div className="flex p-4 justify-evenly pt-20">
                <div className="flex flex-col justify-start w-1/2">
                    <div>
                        <p className="text-[#878080] font-bold">Sede Resistencia</p>
                        <hr className="my-2 w-1/2" />
                        <p>Entre Ríos 357 | Resistencia | Rep Argentina</p>
                        <p>+54 362 476-8520</p>
                        <p>ctaachaco@gmail.com</p>
                        </div>
                    <div className=" p-6">
                        <GoogleMap />
                    </div>
                </div>
                <div className="flex flex-col justify-start w-1/2">
                    <div>
                        <p className="text-[#878080] font-bold">Sede Buenos Aires</p>
                        <hr className="my-2 w-1/2" />
                        <p>Bartolomé Mitre 748   |   CABA   |   Rep Argentina  </p>
                        <p>+54 11-7092-4840</p>
                        <p>info@ctaa.org.ar</p>

                    </div>
                    <div>
                        <form className="max-w-md mx-auto p-6 bg-white">
                            <h2 className="text-xl font-bold mb-4">Formulario de Contacto</h2>
                            <div className="mb-4">
                                <input
                                    className="w-full p-2 border rounded border-gray-400"
                                    type="text"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="w-full p-2 border rounded border-gray-400"
                                    type="text"
                                    placeholder="Apellido"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="w-full p-2 border rounded border-gray-400"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="w-full p-2 border rounded border-gray-400"
                                    type="tel"
                                    placeholder="Teléfono"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className="w-full p-2 border rounded border-gray-400"
                                    placeholder="Mensaje"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <script async defer
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAHnhXLHyMDRcw5jXN4LtAYdb-Eu5e2TI">
            </script>
        </div >

    );
}
