import React, { useState } from 'react'
import icon from "../assets/icon.svg"
import add from "../assets/add.svg"
import { Button, Input } from '@material-tailwind/react';
import {data} from "../assets/data.js"
export default function FalshCard() {
  const [isClicked,setIsClicked] = useState(false);
  return (
    <>
    <Popup isClicked={isClicked} setIsClicked={setIsClicked}/>
    <div className='w-full flex justify-between mt-24'>
      <div className='flex gap-2'>
        <div className=' w-10 md:w-20 h-10 md:h-20 rounded-full bg-white drop-shadow-2xl flex items-center justify-center'>
              <img src={icon} alt="" srcset="" className='md:w-12 w-6 h-6 md:h-12' />
        </div>
        <div className='mt-2'>
            <p className='font-semibold text-[5px] md:text-[11px] text-[#696671]'>Published by</p>
             <p className="text-base md:text-xl text-[#06286E]">Hygge<span className=" font-extrabold">X</span></p>
          </div>
        </div>
       
        <div className='flex gap-2 items-center cursor-pointer' onClick={()=>setIsClicked((prev)=>!prev)} >
          <img src={add} alt="" class="w-[25px] md:w-[60px] " />
          <p className='font-semibold text-base md:text-2xl text-grad'>Create Flashcard</p>
        </div>
    </div>
    </>
    
  )
}

const Popup =({isClicked,setIsClicked})=>{
  const [input,setInput]=useState(null);
  const handleSubmit =()=>{
    console.log("clicked")
    const index = data.length;
    data.push(input)
    setIsClicked(false);
  }
  return(
    <>
     <div className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 ${isClicked?"block":"hidden"} backdrop-blur-sm transition-opacity duration-300`}>
      <div className='bg-white w-96 h-52 p-4 rounded-xl'>
        <h1 className='text-grad text-xl font-semibold'>Enter the value</h1>
        <div class="relative h-11 w-full min-w-[200px] mt-7">
          <input
            class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" " onChange={(e)=>setInput(e.target.value)} />
          <label
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Equation
          </label>
        </div>
        <div className=' flex flex-row-reverse mt-6 gap-2'>
          <Button onClick={handleSubmit} className=' bg-gradient-to-b from-[#06286E] to-[#164EC0]'>Create</Button>
          <Button  variant="text" onClick={()=>setIsClicked(false)} >Cancel</Button>       
        </div>
      </div>
     </div>
    </>
  )
}
