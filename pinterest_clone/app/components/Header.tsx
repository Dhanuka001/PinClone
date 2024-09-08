import React from 'react'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { HiBell } from 'react-icons/hi';
import { HiChat } from 'react-icons/hi';

function Header() {
  return (
    <div className='flex gap-3 md:gap-2 items-center p-6'>
      <Image src="/logo.png"
       alt="logo"
        width={80} 
        height={80}
        className='hover:bg-gray-300 py-2 rounded-full cursor-pointer' />

        <button className='bg-black text-white p-2 px-4 rounded-full '>Home</button>
        <button className='font-semibold p-2 px-4 rounded-full '>Create</button>

        <div className='bg-gray-200 p-3 flex gap-3 items-center rounded-full w-full hidden md:flex'>
        <IoSearch className='text-[25px] text-gray-500  '/>
        <input type="text" placeholder='Search' className='bg-transparent rounded-rull outline-none'/>
        
        </div>
        <IoSearch className='text-[25px] text-gray-500 md:hidden'/>
        <HiBell className='text-[40px] text-gray-500'/>
        <HiChat className='text-[40px] text-gray-500'/>

        <Image src="/man.jpeg" alt='user-photo' width={50} height={50}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>
    </div>
  )
}

export default Header
