import React, { useState } from 'react'
import { questions } from './Data/Faqdata'

export default function Faq() {
    let [questionId,setQuestionId]=useState(0)

    return (
        <div className='max-w-[1000px] mx-auto my-5'>
            <h1 className='font-bold text-3xl mb-5 text-center'>FAQ</h1>

            <div >
                {
                questions.map((items, index) => {
                    return (
                        <div className='border-[1px] border-[#ccc] mb-3'>
                            <div className='bg-amber-500 p-3 text-left font-bold relative cursor-pointer'
                            onClick={()=>setQuestionId(items.id)}
                            >
                                {items.question}
                                 <span className='absolute right-2 text-[25px] top-0'>
                                   {items.id==questionId ? "-" : "+" } 
                                    
                                    
                                    </span> </div>

                            <div className={`p-3 
                                
                                ${items.id==questionId ? 'border-2' : 'hidden' } `}>
                                 {items.answer}
                            </div>
                        </div>
                    )
                })
                
                }



            </div>
        </div>
    )
}
