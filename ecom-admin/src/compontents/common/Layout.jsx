import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div className='grid grid-cols-[20%_auto] gap-5'>
      <SideBar/>
      <div>
            <Header/>

            <Outlet/>

            
            <Footer/>
      </div>
      
     
    </div>
  )
}
