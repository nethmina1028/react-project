import React, { useState } from 'react'



function Pricing() {

const[isYearly,setIsyearly]=useState(false)

const packages = [
  {name:'start',monthlyPrice:'$10',yearlyPrice:'$100',description:"A common form of loxscknz cxnjcxc xczxc cxzccxc zxczx cx,sjdjdsdsdj sdjandjads  sddsds"},
  
  {name:'Advance',monthlyPrice:'$30',yearlyPrice:'$400',description:"A common form of loxscknz cxnjcxc xczxc cxzccxc zxczx cx,sjdjdsdsdj sdjandjads  sddsds"},

  {name:'Premium',monthlyPrice:'$90',yearlyPrice:'$899',description:"A common form of loxscknz cxnjcxc xczxc cxzccxc zxczx cx,sjdjdsdsdj sdjandjads  sddsds"},
]

  return (
    <div className='p-4 py-10 mx-auto md:px-14 max-w-s'>
        <div className='text-center'>
            <h2 className='mb-2 text-3xl font-extrabold md:text-5xl text-primary'>Here are all plans</h2>
            <p className='px-4 mx-auto text-tartiary md:w-1/3'>Contamos con transporte transporte de su mercancia, con la seguridadd correspondiente y en el tiempo optimo</p>
        
               
                 {/* toggel pricing*/}
             
             <div className='mt-16'>
                         
                  <label htmlFor='toggle'className='inline-flex items-center cursor-pointer'>
                      <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                     
                      <div className='h-6 transition duration-200 ease-in-out bg-gray-300 rounded-full w-14'>
                        <div className={'w-6 h-6 rounded-full ${isYearly ? "bg-primary ml-8":"bg-gray-500"}'}></div>
                      </div>
                     
                      <span className='ml-8 text-2xl font-semibold'>Year</span>

                  </label>
             </div>


        </div>
    </div>
  )
}

export default Pricing