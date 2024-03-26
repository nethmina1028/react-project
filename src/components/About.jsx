import React from 'react'
import aboutImg1 from '../assets/about1.png'
import aboutImg2 from '../assets/about2.png'


function About() {
  return (
    <div className='p-4 mx-auto md:px-14 max-w-s'>

        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2'>
            <img src={aboutImg1} alt=""/>
            </div>

               {/*about content*/}
               <div className='md:w-2/5'>
                <h2 className='mb-5 text-3xl font-bold leading-normal md:text-5xl text-primary'>Comprometidos con la efectividad de los procesos nuestra mision. </h2>
               <p className='text-lg text-tertiary mb-7'>Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta, que permitan satisfacer las expectativas de nuestros clientes, logrando ser la mejor opcion en la cadena logística de distribución.</p>
               <button className='btnPrimary'>Get Started</button>
               </div>

        </div>
                       




            {/*about content second part*/}


         <div className='flex flex-col items-center  md:flex-row-reverse'>
               
         <div className='md:w-1/2'>
            <img src={aboutImg2} alt=""/>
            </div>
            

               {/*about content*/}
               <div className='md:w-2/5'>
                <h2 className='mb-5 text-3xl font-bold leading-normal md:text-5xl text-primary'>Ser un aliado estrategico nuestra vision. </h2>
               <p className='text-lg text-tertiary mb-7'>Ser el aliado estratégico más confiable y seguro para sus operaciones de nuestros clientes; por brindar un servicio de alto valor mediante nuestra flota moderna y equipo altamente calificado.</p>
               <button className='btnPrimary'>Get Started</button>
               </div>
           
              
        </div>
    </div>
  )
}

export default About