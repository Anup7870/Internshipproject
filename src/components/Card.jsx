import React, { useState } from 'react'
import { AiOutlineBulb } from "react-icons/ai";
import { RxSpeakerLoud } from "react-icons/rx";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import FalshCard from './FalshCard.jsx';
import maximizer from '../assets/maximizer.svg'
import reloder from "../assets/reloder.svg"
import {data} from "../assets/data.js"
export default function Card() {
  
  const [pagination,setPagination] = useState(0);
  const [selection,setSelection] = useState(1)
  const [rotate, setRotate] = useState(false);

  const handleLeft=()=>{
    if((pagination+1)===1)return;
    setPagination((prev)=>prev-1);
    
  }
  const handleRight = ()=>{
    if((pagination+1)===data.length)return;
    setPagination((prev)=>prev+1);
    
  }

  const handleClick = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000);
    setPagination(0)
  };


  
  return (
    <div className='mt-10 flex flex-col items-center justify-center'>
        <div className=' md:px-16 px-5  flex item-center md:gap-10 gap-4 font-medium text-[#696671] text-[16px] md:text-[20px]'>
            <p 
            className={`py-2 cursor-pointer ${selection===1?"font-bold border-b-2 text-[#06286E]":" "} text-sm md:text-xl hover:border-b-2 border-[#06286E] hover:text-[#06286E]`}
            onClick={()=>setSelection(1)}
            >Study</p>
            <p className={`py-2 cursor-pointer ${selection===2?"font-bold border-b-2 text-[#06286E]":" "}  text-sm md:text-xl hover:border-b-2 border-[#06286E] hover:text-[#06286E]`}
            onClick={()=>setSelection(2)}>Quize</p>
            <p className={`py-2 cursor-pointer ${selection===3?"font-bold border-b-2 text-[#06286E]":" "}  text-sm md:text-xl hover:border-b-2 border-[#06286E] hover:text-[#06286E]`}
            onClick={()=>setSelection(3)}>Test</p>
            <p className={`py-2 cursor-pointer ${selection===4?"font-bold border-b-2 text-[#06286E]":" "}  text-sm md:text-xl hover:border-b-2 border-[#06286E] hover:text-[#06286E]`}
            onClick={()=>setSelection(4)}>Game</p>
            <p className={`py-2 cursor-pointer ${selection===5?"font-bold border-b-2 text-[#06286E]":" "}  text-sm md:text-xl hover:border-b-2 border-[#06286E] hover:text-[#06286E]`}
            onClick={()=>setSelection(5)}>Other</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center mt-4'>
        <div className='card_grad w-full md:w-[712px] h-[213px] md:h-[393px] rounded-3xl '>
          <div className='w-full flex justify-between  px-4 mt-5 md:mt-10'>
            <AiOutlineBulb fill='white' className='text-white h-5 md:h-9 w-5 md:w-9 cursor-pointer'/>
            <RxSpeakerLoud fill='white' className='text-white h-5 md:h-9 w-5 md:w-9 cursor-pointer'/>
          </div>
          <p className='font-bold text-xl md:text-[39px] text-white text-center mt-[54px] md:mt-[117px]'>{data[pagination]}</p>
        </div>
        <div className='flex justify-between items-center w-full md:w-[712px] px-6 mt-4 md:mt-5'>
       
           <img src={reloder} alt="" className={`h-[30px] md:h-[40px] ${rotate?"rotate":""}`} onClick={handleClick}  />

          <div className='flex  items-center gap-3'>
            <span 
            className=' w-8 md:w-16 h-8 md:h-16 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0] flex items-center justify-center'
            onClick={handleLeft}
            >
              <FaChevronLeft fill='white' className='md:h-6 h-4'/>
              </span>
            {
              pagination<9?"0"+(pagination+1):pagination+1
            }/{data.length<10?"0"+data.length:data.length}
            <span 
            className='w-8 md:w-16 h-8 md:h-16 rounded-full bg-gradient-to-b from-[#06286E] to-[#164EC0] flex items-center justify-center'
            onClick={handleRight}
            >
              <FaChevronRight fill="white" className='md:h-6 h-4'/>
              </span>
          </div>
          {/* <RiFullscreenLine size="30px"/> */}
          <img src={maximizer} alt="" />
        </div>
        </div> 
        <FalshCard />
        
    </div>
  )
}
