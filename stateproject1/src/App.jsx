
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let [count,setCount]=useState(10)

 
  let chnageCount=()=>{
    setCount(count+1)
  }

  let addData=(n,m)=>{
    console.log(n+m)
  }

  let [password,setPassword]=useState(false)



  return (
    <>
        <div>
          <input type={ password ? "text"  : "password" } />
          <button onClick={()=>setPassword( ! password  )}>
            { password ? "hide" : "show"  }
          </button>
        </div>



        <h1>{count}</h1>
        <button onClick={chnageCount}>Save</button>
        <button onClick={ ()=> addData(10,20) }>Add</button>
    </>
  )
}

export default App
