import {  AiOutlineMenu } from 'react-icons/ai'
import { YoutubeIcon } from '..'
import Search from './NavBar/Search'
import Link from 'next/link'

const NavBar = () => {
   return (
    
      <header>
         <nav className="w-full py-3 px-3 lg:gap-x-64 flex justify-between lg:justify-normal">
            <div className='w-56 flex items-center'>
               <span className='hover:bg-zinc-800 rounded-full p-2 me-5 hover:cursor-pointer'>
                  <AiOutlineMenu className='text-[22px] leading-none text-gray-300' />
               </span>
               <Link href='/'>
                  <span className='cursor-pointer'>
                     <YoutubeIcon width={ 90 } color='#fff'  />
                  </span>
               </Link>
            </div>
            <Search />
         </nav>
      </header>
      
   )
}

export default NavBar