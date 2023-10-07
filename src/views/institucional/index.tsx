import Banner from "@/components/banner/Banner";
import Separator from "@/components/separator/Separator";



export function InstitucionalPage() {
    return (
        <div className="bg-white h-full ">
            <Banner
                src="./images/quienesSomos.svg"
                alt="CTA - banner"
                width={1200}
                height={300}
            />
            <Separator text="QUIENES SOMOS - INSTITUCIONAL" className="" />
            <p className="p-8 text-justify">Por Juan Carlos Giuliani*
                Somos una central de trabajadores y trabajadoras, no una confederación de organizaciones sindicales. Propiciamos la afiliación directa de cada trabajador a esta experiencia colectiva de nuevo tipo. Ello implica que no es necesario que el trabajador esté afiliado a un gremio para ser CTA.
                Prevalece su identidad de clase como sujeto social sin importar su condición de empleo. Es decir si está o no registrado, si pertenece al pequeño universo del trabajo formal, o al océano de indignidad donde la mayoría sobrevive a duras penas a las diferentes clases de fraude con que las patronales arropan de luto el trabajo a destajo.
                Se calcula que aproximadamente el 53 por ciento de la fuerza del trabajo está en negro en nuestro país bajo formas variopintas de precariedad y flexibilización laboral. Somos la expresión de ese emergente social. A la exclusión con que los condena el sistema no le vamos a sumar mayor marginalidad y ninguneo. No dejan de ser trabajadores porque no perciban un recibo de sueldo en blanco. Por eso, también, somos un nuevo modelo sindical que no tiene nada que ver con el otro, del que nos fuimos hace más de 25 años para crear algo distinto. Cero sindicalismo empresarial.
                En medio de esta plaga, que combina altas dosis de informalidad laboral con la falta de libertad y democracia sindical, venimos a dar cuenta de esa realidad heredada del neoliberalismo para transformarla e impedir que se perpetúe la superexplotación capitalista neocolonial.
                Esta construcción política, gremial, organizativa y cultural de la clase no sólo promueve la afiliación directa del trabajador sino que estipula la elección, a través del voto secreto y directo de sus casi 1.200.000 afiliados, de cada una de las conducciones locales, regionales, provinciales y de su Comisión Ejecutiva Nacional. Nada de dedo.
                Participan de su vida interna, a lo largo y ancho del país, trabajadoras y trabajadores de la actividad pública y privada, activos y jubilados, formales, precarios, cuentapropistas, autogestionados, enrolados en organizaciones sindicales con personería gremial o simplemente inscriptas; militantes de organizaciones barriales, sociales, comunitarias, juveniles, de discapacitados, migrantes, de pueblos originarios y todos aquellos que integran la Coordinación Nacional de Trabajadores/as de la Industria de la CTA y las federaciones de trabajadores de la Energía, de Jubilados, de Docentes, la Federación Territorial Nacional, de la Salud, de Cultura y Comunicación, etcétera.
                Somos orgullosos rescatistas del ejemplo de resistencia de los antiguos moradores de estas tierras, sacrificados por el imperio español en las entrañas del socavón en las minas de oro y plata; de los criollos que hicieron las primeras huelgas, como los aguateros de los ríos de La Plata y el Paraná por mejores condiciones laborales y buenos salarios, o los de los astilleros correntinos para negarse a construir las barcazas con que el Ejército de Mitre masacraba al pueblo paraguayo.
                Somos herederos de los anarquistas, socialistas y comunistas que llegaron del otro lado del mar para formatear, junto al sindicalismo revolucionario primero, y a los “cabecitas negras” que rebautizaron la Plaza de Mayo el 17 de octubre después, la matriz del movimiento obrero contemporáneo.
                Somos continuadores de la heroica Resistencia Peronista y del Cordobazo; de los postulados revolucionarios de los planes de La Falda y Huerta Grande; del Manifiest....</p>
        </div>

    )
}