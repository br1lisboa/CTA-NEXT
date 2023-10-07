import Separator from "@/components/separator/Separator";
import Tabla from "@/components/tablaSecretarias/Tabla";

const datos = [
    { cargo: 'SECRETARIA GENERAL', apellido: 'AHUMADA VICTOR ARIEL', nombreNroDoc: '32698553' },
    { cargo: 'SECRETARIA ADJUNTA', apellido: 'DIAZ EDUARDO FABIAN', nombreNroDoc: '17033251' },
    { cargo: 'SECRETARIA ADMINISTRATIVA', apellido: 'STARINGER CLAUDIA CRISTINA', nombreNroDoc: '25857748' },
    { cargo: 'SECRETARIA GREMIAL', apellido: 'MOLINA YANINA SOLEDAD', nombreNroDoc: '28701384' },
  ];
  const datos1 = [
    { cargo: 'SECRETARIA GENERAL', apellido: 'IBALO GISELA LORENA', nombreNroDoc: '33228306' },
    { cargo: 'SECRETARIA ADJUNTA', apellido: 'OLMEDO ELBA ROSA', nombreNroDoc: '26875923' },
    { cargo: 'SECRETARIA ADMINISTRATIVA', apellido: 'ALOMO WALTER EDGARDO', nombreNroDoc: '16115844' },
    { cargo: 'SECRETARIA GREMIAL', apellido: 'TEBE MARIO ALBERTO', nombreNroDoc: '26528677' }
  ];
  
  const datos2 = [
    { cargo: 'SECRETARIA GENERAL', apellido: 'SANDOVAL LUIS ESTEBAN', nombreNroDoc: '28041050' },
    { cargo: 'SECRETARIA ADJUNTA', apellido: 'MADRIGAL GUSTAVO RAMON', nombreNroDoc: '27449376' },
    { cargo: 'SECRETARIA ADMINISTRATIVA', apellido: 'ZALAZAR RAMONA', nombreNroDoc: '25151376' },
    { cargo: 'SECRETARIA GREMIAL', apellido: 'BARROZO VICTOR BERNARDINO', nombreNroDoc: '30415391' }
  ];
  
  const datos3 = [
    { cargo: 'SECRETARIA GENERAL', apellido: 'KOTOF HECTOR JAVIER', nombreNroDoc: '18236268' },
    { cargo: 'SECRETARIA ADJUNTA', apellido: 'ACOSTA NATALIA NOEMI', nombreNroDoc: '24931668' },
    { cargo: 'SECRETARIA ADMINISTRATIVA', apellido: 'LUNA RICARDO ALBERTO', nombreNroDoc: '26291330' },
    { cargo: 'SECRETARIA GREMIAL', apellido: 'CHAMORRO ANGEL ALBERTO', nombreNroDoc: '14570699' }
  ];
  
  const datos4 = [
    { cargo: 'SECRETARIA GENERAL', apellido: 'ZAMUDIO DAFNE', nombreNroDoc: '21686588' },
    { cargo: 'SECRETARIA ADJUNTA', apellido: 'VARGAS GOMEZ LISANDRO', nombreNroDoc: '17033251' },
    { cargo: 'SECRETARIA ADMINISTRATIVA', apellido: 'MANTONI VALERIA ROMINA', nombreNroDoc: '31458292' },
    { cargo: 'SECRETARIA GREMIAL', apellido: 'CHAVEZ DANTE REINERIO', nombreNroDoc: '28539802' }
  ];
  
  const datos5 = [
    { cargo: 'SECRETARIA GENERAL', apellido: 'OVIEDO ELSA NILDA', nombreNroDoc: '14732308' },
    { cargo: 'SECRETARIA ADJUNTA', apellido: 'VERA GUSTAVO A', nombreNroDoc: '23497811' },
    { cargo: 'SECRETARIA ADMINISTRATIVA', apellido: 'GOMEZ YULIANA NOEMI', nombreNroDoc: '43335029' },
    { cargo: 'SECRETARIA GREMIAL', apellido: 'CARRUEGO ANA MABEL', nombreNroDoc: '24797370' }
  ];
  
  const datos6 = [
    { cargo: 'SECRETARIA GENERAL', apellido: 'JIMENEZ PEDRO HORACIO', nombreNroDoc: '20412927' },
    { cargo: 'SECRETARIA ADJUNTA', apellido: 'BARRIOS RAMONA INES', nombreNroDoc: '22153768' },
    { cargo: 'SECRETARIA ADMINISTRATIVA', apellido: 'FERNANDEZ CARLOS', nombreNroDoc: '16148385' },
    { cargo: 'SECRETARIA GREMIAL', apellido: 'GARRIA HECTOR JAVIER', nombreNroDoc: '26447848' }
  ];
  
  const datos7 = [
    { cargo: 'SECRETARIA GENERAL', apellido: 'SALAZAR OSMAR NERI', nombreNroDoc: '14606171' },
    { cargo: 'SECRETARIA ADJUNTA', apellido: 'BARRETO CARLOS LUIS', nombreNroDoc: '22924571' },
    { cargo: 'SECRETARIA ADMINISTRATIVA', apellido: 'TRANGONI ISABEL MARIA DE LOS ANGELES', nombreNroDoc: '30803242' },
    { cargo: 'SECRETARIA GREMIAL', apellido: 'CHAPARRO FERNANDO ISAAC', nombreNroDoc: '22828084' }
  ];
export function Secretarias() {
    return (
        <>
            <Separator text="COMISIÓN EJECUTIVA REGIONAL SUR - VILLA ANGELA" className="text-center my-10" />
            <div className="max-w-full mx-auto p-5">
               <Tabla data={datos}/>
               <Separator text="COMISIÓN EJECUTIVA REGIONAL J. J. CASTELLI" className="text-center my-10" />
               <Tabla data={datos1}/>
               <Separator text="COMISION EJECUTIVA REGIONAL PSCIA. ROQUE SÁENZ PEÑA" className="text-center my-10" />
               <Tabla data={datos2}/>
               <Tabla data={datos3}/>
               <Separator text="COMISION EJECUTIVA REGIONAL METROPOLITANA" className="text-center my-10" />
               <Tabla data={datos4}/>
               <Separator text="COMISION EJECUTIVA LOCAL SAN MARTIN " className="text-center my-10" />
               <Tabla data={datos5}/>
               <Separator text="COMISIÓN EJECUTIVA REGIONAL" className="text-center my-10" />
               <Tabla data={datos6}/>
               <Tabla data={datos7}/>
            </div>

        </>

    )
}

