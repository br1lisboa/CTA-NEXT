import Separator from "@/components/separator/Separator";
import Tabla from "@/components/tablaSecretarias/Tabla";


const datos = [
  { cargo: 'SECRETARIA GENERAL', apellido: 'SALAZAR OSMAR NERI', nombreNroDoc: '14606171' },
  { cargo: 'SECRETARIA ADJUNTA 1', apellido: 'BARRETO CARLOS LUIS', nombreNroDoc: '22924571' },
  { cargo: 'SECRETARIA ADJUNTA 2', apellido: 'BELTRAN FLAVIA BETTINA', nombreNroDoc: '33228634' },
  { cargo: 'SECRETARIA GREMIAL', apellido: 'CHAPARRO FERNANDO ISAAC', nombreNroDoc: '22828084' },
  { cargo: 'SECRETARIA DE ORGANIZACIÓN', apellido: 'MUSIAL JONATHAN ALEJANDRO', nombreNroDoc: '34393947' },
  { cargo: 'SECRETARIA DEL INTERIOR', apellido: 'GOMEZ EVELIN YANINA', nombreNroDoc: '29603312' },
  { cargo: 'SECRETARIA DE COMUNICACIÓN Y DIFUSIÓN', apellido: 'FARIAS JOSE IGNACIO', nombreNroDoc: '21411014' },
  { cargo: 'SECRETARIA DE CONTABILIDAD Y FINANZAS', apellido: 'ESCOBAR AURORA', nombreNroDoc: '30006743' },
  { cargo: 'SECRETARIA DE DERECHOS HUMANOS', apellido: 'FERNANDEZ MARIA DEL CARMEN', nombreNroDoc: '6079381' },
  { cargo: 'SECRETARIA DE ASISTENCIA SOCIAL', apellido: 'GOMEZ EDILIO MARTIN', nombreNroDoc: '16119607' },
  { cargo: 'SECRETARIA DE FORM.,INVEST.,ORIY Y EST.', apellido: 'ORUE MARIA ISABEL', nombreNroDoc: '28888436' },
  { cargo: 'SECRETARIA DE ACTAS', apellido: 'GOMEZ MANUEL ALEJANDRO', nombreNroDoc: '21626201' },
  { cargo: 'SECRETARIA DE LA JUVENTUD', apellido: 'MORALES EDGAR JOSIAS', nombreNroDoc: '44085306' },
  { cargo: 'SECRETARIA DE PUEBLOS ORIGINARIOS', apellido: 'CABALLERO MONICA NOEMI', nombreNroDoc: '32672018' },
  { cargo: 'SECRETARIA DE CULTURA', apellido: 'FARIAS ALFREDO FABIAN', nombreNroDoc: '23305860' },
  { cargo: 'SECRETARIA DE DISCAPACIDAD', apellido: 'MARIN CARLOS FABIAN', nombreNroDoc: '17497526' },
];
export function Secretarias() {
  return (
    <>
      <Separator text="COMISIÓN EJECUTIVA PROVINCIA DEL CHACO" className="text-center my-10" />
      <div className="max-w-full mx-auto p-5">
        <Tabla data={datos} />
        <Separator text="COMISIÓN EJECUTIVA REGIONAL J. J. CASTELLI" className="text-center my-10" />

      </div>

    </>

  )
}

