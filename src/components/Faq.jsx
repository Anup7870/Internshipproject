import React,{useState} from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Faq({data}) {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='w-full'>
                <div className='mt-5 md:mt-9'>
                <div className='w-full md:w-[50%] items-center mt-5 md:mt-10 border border-[#217eec] rounded-lg'>
                    <div className='p-2' onClick={()=>setIsOpen((prev)=>!prev)}>
                        <div className='flex gap-2 items-center justify-between'>
                        <p className='font-semibold text-xs md:text-sm text-[#28262C]'>{data.ques}</p>
                        <MdOutlineKeyboardArrowDown fill="#28262C"/>
                        </div>
                        <div className={`mt-2 ${isOpen?"block":"hidden"} px-2 font-base text-[10px] md:text-sm`}>{data.ans}</div>
                    </div>
                </div>
              </div>
    </div>
    
  )
}
