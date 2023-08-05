"use client"

import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './Search.module.css'

const Search = () => {
   const [inputFocus, setInputFocus] = useState(false)

   const focusInputStyle = inputFocus ? 'ring-1 ring-blue-500' : 'ring-1 ring-neutral-700'

   const handleToggleInputFocus = () => {
      setInputFocus( ( state ) => !state  )
   }

   return (
      <div className='flex rounded-3xl w-[38%]'>
         <div className={`${styles.searchContainer} ${focusInputStyle} w-full`}>
            { inputFocus && (
               <AiOutlineSearch className='text-[20px] leading-none font-thin text-slate-300' />
            )}
            <input 
               onFocus={ handleToggleInputFocus }
               onBlur={ handleToggleInputFocus }
               type="text" 
               placeholder="Buscar"
               //            className='py-2 px-4 rounded-3xl bg-neutral-800 text-sm placeholder:text-gray-300 
               //    focus:outline-none focus:outline-1 focus:outline-blue-500'
               className='text-sm w-full bg-inherit placeholder:text-gray-300 text-gray-300 focus:outline-none'
            />
         </div>
         <span className={`${inputFocus ? 'ms-0.5' :''} h-full rounded-r-3xl flex items-center px-4 py-2 bg-[#222222] ring-1 ring-neutral-700`}>
            <AiOutlineSearch className='text-[20px] leading-none font-thin text-slate-300' />
         </span>
      </div>
   )
}

export default Search