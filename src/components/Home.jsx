import React from 'react'
import banner from '../assets/banner.png'

function Home() {
  return (
    <div className='p-4 mx-auto mt-10 md:px-12 max-w-screen-2xl'>
        <div className='rounded-br-[80px] gradientBg rounded-xl md:p-9 px-4 py-9'>
            <div className='flex flex-col items-center justify-between gap-10 md:flex-row-reverse'>
                
                {/*banner image*/}
                <div>
                    <img src={banner}alt=''className='lg:h-[386px]'/>
                </div>

                {/*banner content*/}
                <div className='md:w-3/5'>
                    <h2 className='mb-6 text-4xl font-bold leading-relaxed text-white md:text-7xl'>Empresa dedicada altransporte de carga pesada</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>Somos una empresa familiar dedicada al rubro de transporte de carga pesa, carga concentrada y minerales</p>
                   
                    <div className='space-x-5 space-y-4'>
                        <button className='btnPrimary'>Get Started</button>
                        <button className='btnPrimary'>Discount</button>
                    </div>
               
                </div>
                
                

            </div>
        </div>
    </div>
  )
}

export default Home