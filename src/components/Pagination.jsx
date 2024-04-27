import React from 'react'
import leftarrow from "../assets/leftarrow.svg"
import home from "../assets/home.svg"
import { GoHome } from "react-icons/go";
export default function Pagination() {
  return (
    <div className='flex gap-1 md:gap-2 font-medium text-sm md:text-lg items-center text-[#696671] mt-9'>
        <GoHome className=' text-xl md:text-3xl md:text text-[#696671]'/>
        <img src={leftarrow} className='md:h-5 h-3' />
        <p>FlashCard</p>
        <img src={leftarrow} className='md:h-5 h-3' />
        <p>Mathematics</p>
        <img src={leftarrow} className='md:h-5 h-3' />
        <p className='text-[#06286E] font-semibold truncate'>Relation And function</p>
    </div>
  )
}
