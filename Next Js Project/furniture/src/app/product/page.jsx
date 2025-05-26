
//Page SSR |  Client CSR "use Cleint"
"use client"
import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductComponents/ProductList'
import axios from 'axios'

const categories = [
  { id: 1, name: 'Living Room', items: ['Sofas', 'Coffee Tables', 'TV Stands'] },
  { id: 2, name: 'Bedroom', items: ['Beds', 'Wardrobes', 'Nightstands'] },
  { id: 3, name: 'Dining Room', items: ['Dining Tables', 'Dining Chairs', 'Buffets'] },
  { id: 4, name: 'Office', items: ['Desks', 'Office Chairs', 'Bookshelves'] },
]




export default  function  ProductPage() {
 let [myProduct,setmyProduct]=useState([])
  let getProduct=async ()=>{
    let productData=await axios.get(`https://dummyjson.com/products`)
    let finalData= await productData.data;
    setmyProduct(finalData.products)
  }

useEffect(()=>{
  getProduct()
},[])
  // let myProduct= await getProduct()



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Categories */}
        <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          
          <div className="space-y-4">
            <div className="text-gray-600 px-4 py-2 rounded-md">
              All Categories
            </div>
            
            {categories.map((category) => (
              <div key={category.id} className="space-y-2">
                <div className="text-gray-600 px-4 py-2 rounded-md">
                  {category.name}
                </div>
                <div className="ml-4 space-y-2">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="text-gray-500 px-4 py-1 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <ProductList  myProduct={myProduct} />
      </div>
    </div>
  )
} 