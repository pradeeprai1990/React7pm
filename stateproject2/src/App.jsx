import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faq from './Faq'

function App() {
  const [modal, setModal] = useState(false)

  return (
    <>
    <button onClick={()=> setModal(true) }>Show Modal</button>
    <div className={

      `w-[350px] h-[350px] bg-white shadow-2xl fixed left-[50%]  translate-x-[-50%] translate-y-[-50%] duration-1000 z-[9]  ${ modal ? 'top-[50%]' : 'top-[-1000px] ' }    `
      
      }>
      <h2 className='text-center py-3 font-bold text-[22px] border-b-[2px] border-b-[#ccc]  relative'>Enquiry Now <span className='absolute right-3 cursor-pointer'  onClick={()=> setModal(false) }>&times;</span></h2>
    </div>

    <Faq/>

    </>
  )
}

export default App
