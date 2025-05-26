"use client"
import { addTocart, deleteCart } from '@/app/slice/cartSlice'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProductList({ myProduct }) {

  return (

    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProduct.map((product) => (
              <ProductCard product={product}/>
            ))}
      </div>

    </div>
  )
}

function ProductCard({product}) {
  let myCart=useSelector((store)=>store.cart.cart)

  let dispatch=useDispatch()
  let {title,price,thumbnail,id}=product
  let addtoCart=()=>{
      let obj={
        qty:1,
        title,
        price,
        thumbnail,
        id
      }
      dispatch(addTocart(obj))
   
  }


  let checkmyProductinCart=myCart.filter((items)=>items.id==id)

  return (
    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Link href={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-xl font-bold text-gray-900">${product.price}</p>

      {checkmyProductinCart.length==1
        ?
        <button onClick={()=>dispatch(deleteCart(id))}  className="mt-4 w-full bg-red-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
          Delete
       </button>
        :
        <button onClick={addtoCart} className="mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
          Add to Cart
        </button>
      }

        
      </div>
    </div>
  )
}