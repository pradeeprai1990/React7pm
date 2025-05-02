import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Regsiter from './pages/Regsiter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
           {/* http://localhost:5174/ */}
          <Route path='/' element={<Home/>} />
          {/* http://localhost:5174/cart */}
          <Route path='/cart' element={<Cart/>} />
           {/* http://localhost:5174/login */}
           <Route path='/login' element={<Login/>} />
            {/* http://localhost:5174/regsiter */}
            <Route path='/register' element={<Regsiter/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
