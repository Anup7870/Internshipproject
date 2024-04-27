import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Pagination from './components/Pagination'
import Card from './components/Card'
import Faq from "./components/Faq"
function App() {
  const [count, setCount] = useState(0)
  const data =[
    {
        ques:"Can education flashcards be used for all age groups?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ad."
    },
    {
        ques:"How do education flashcards work?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ad."
    },
    {
        ques:"Can education flashcards be used for test preparation?",
        ans:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ad."
    }
]
  return (
    <>
      <div className='w-full bg-[#F9F9F9] min-h-screen md:px-16 px-5 !font-inter'>
        <Navbar/>
        <Pagination/>
        <h2 className='text-grad font-bold text-xl md:text-3xl mt-12 text-gradient-to-b form-[#06286E] to-[#164EC0]'>Relation and function (Mathmatics)</h2>
        <Card/>
        <h2 className='text-grad font-bold text-xl md:text-4xl mt-24'>FAQ</h2>
        {data.map((data)=><Faq data={data}/>)}

        </div>
    </>
  )
}

export default App
