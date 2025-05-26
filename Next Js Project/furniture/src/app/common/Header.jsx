"use client"
import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Header() {

  let myCart=useSelector((store)=>store.cart.cart)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Furniture
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href={'/'} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href={"/about-us"} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href={"/product"} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Products
            </Link>
            <Link href={"/product"} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Cart  {myCart.length}
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}
