import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './compontents/pages/Login.jsx'
import Layout from './compontents/common/Layout.jsx'
import Dashboard from './compontents/pages/Dashboard.jsx'
import AddColor from './compontents/pages/color/AddColor.jsx'
import ViewColor from './compontents/pages/color/ViewColor.jsx'
import Addmaterial from './compontents/pages/material/Addmaterial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes path="/">
          <Route index element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="color">
               <Route path="add" element={<AddColor />} />
               <Route path="view" element={<ViewColor />} />
            </Route>
            <Route path="material">
               <Route path="add" element={<Addmaterial />} />
               
            </Route>
          </Route>
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      <Route element={<Layout />}>
     
         <Route path="dashboard" element={<Dashboard />} />
      </Route> */}

  </BrowserRouter>
  </StrictMode>,
)
