"use client"

import { useLayoutEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './Search.module.css'

const Search = () => {

   const [inputFocus, setInputFocus] = useState(false)
   const [isMounted, setIsMounted] = useState(true)
   
   const focusInputStyle = inputFocus ? 'ring-1 ring-blue-500' : 'ring-1 ring-neutral-700'
   
   const handleToggleInputFocus = () => {
      setInputFocus( ( state ) => !state  )
   }
  
   useLayoutEffect(() => {
      const handleResize = () => {
         setIsMounted(!window.matchMedia('(max-width: 490px)').matches);
      };
  
      // Disparar el efecto cuando se carga la página
      handleResize();
  
      // Agregar eventos de escucha para cambios en el tamaño de la ventana
      window.addEventListener('resize', handleResize);
  
      // Limpiar los eventos de escucha cuando el componente se desmonte
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);
  
   if ( isMounted ) {
      return (
         <div className='flex rounded-3xl w-[38%]'>
            <div className={`${styles.searchContainer} ${focusInputStyle} w-full `}>
               { inputFocus && (
                  <div className='flex items-center rounded-l-3xl'>
                     <AiOutlineSearch className='text-[20px] leading-none font-thin text-slate-300' />
                  </div>
               )}
               <div className={`w-full py-0`}>
                  <input 
                     onFocus={ handleToggleInputFocus }
                     onBlur={ handleToggleInputFocus }
                     type="text" 
                     placeholder="Buscar"
                     className='text-sm w-full bg-inherit placeholder:text-gray-300 text-gray-300 focus:outline-none'
                  />
               </div>
            </div>
            <span className={`${inputFocus ? 'ms-0.5' :''} h-full rounded-r-3xl flex items-center px-4 py-2 bg-[#222222] ring-1 ring-neutral-700 cursor-pointer`}>
               <AiOutlineSearch className='text-[20px] leading-none font-thin text-slate-300' />
            </span>
         </div>
      )
   } else {
      return (
         <div className='text-white flex items-center w-full justify-end px-3'>
            <p>Icon</p>
         </div>
      )
   }
}

export default Search