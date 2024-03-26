import React from 'react'
import Logo from '../assets/Log.png'

//react icons
import { GrLanguage } from "react-icons/gr";
import { FaBars,FaXmark } from "react-icons/fa6";

function Navbar() {

    
    const navItems = [
          {link:"Overview",path:"home"},
          {link:"Feature",path:"feature"},
          {link:"About",path:"about"},
          {link:"Pricing",path:"pricing"},



    ]


  return (
    <nav className='top-0 left-0 right-0 p-4 mx-auto bg-white border-b md:px-14 max-w-screen-2xl textborder-primary'>
          <div className='container flex justify-between mx-auto text-lg font-medium'>
             <div className='flex items-center space-x-20'>
                <a href="/" ><img src={Logo} alt=""className='items-center inline-block w-42 '/></a>
                  

                   {/*showing navitems*/}
                  <ul className='hidden space-x-12 md:flex'>
                        {
                            navItems.map(({link,path}) =><a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
                        }
                  </ul>
            
             </div>


           {/*showing langage and sign up buttom*/}   
             
             <div className='items-center hidden space-x-12 md:flex'>
                <a href="/" className='items-center hidden lg:flex hover:text-secondary '><GrLanguage className='mr-2'/><span>Language</span></a>
                <button className='px-4 py-2 transition-all duration-300 rounded bg-secondary hover:text-white hover:bg-indigo-600'>Sign up</button>
             </div>
              
           {/*menu btn in mobile view*/}

              <div className='md:hidden'>
              <button></button>
              </div>



          </div>
    </nav>
  )
}

export default Navbar