import React from 'react'
import featuredImg from '../assets/feature.png'

function Features() {
  return (
    <div className='px-4 mx-auto my-24 md:px-14 max-w-screen-2xl'>
      <div className='flex flex-col items-start justify-between gap-10 lg:flex-row'>

        <div className='mt-20 lg:w-1/2'>
          <h3 className='mb-3 text-4xl font-bold text-primary lg:w-1/2'>Why we are better than others</h3>
          <p className='text-base text-tartiary'>Te Ofrecemos la mejor logistica para planear de forma mas eficiente el modo en que serán transportados y almacenados los bienes que necesita trasladar en el mejor plazo posible y con seguridad que nosotros brindamos.</p>
        </div>
          
          {/* featured card*/}
        <div className='w-full lg:w-1/2'> 
              <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl items-center flex justify-center hover:-translate-y-4 transition-all duration-300'>
                    <div>
                           <img src={featuredImg} alt=""/>
                           <h5 className='px-5 mt-5 text-2xl font-semibold text-center text-primary'>Transporte enplata forma</h5>
                    </div>
               </div>
        </div>

      </div>

    </div>
  )
}

export default Features