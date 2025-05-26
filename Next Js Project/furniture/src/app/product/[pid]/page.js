"use client"
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'



export default function singleProduct() {
    let { pid } = useParams()
    let [singleProduct, setsingleProduct] = useState(null)
    let getSigleProductData = () => {
        axios.get(`https://dummyjson.com/products/${pid}`)
            .then((res) => res.data)
            .then((finalres) => {
                setsingleProduct(finalres)
        })
    }

    useEffect(() => {
        getSigleProductData()
    }, [pid])
    return (

        <>
            {
                singleProduct &&
                <div className="container mx-auto px-4 py-8">
                    {/* Breadcrumb */}
                    <div className="text-sm text-gray-500 mb-8">
                        Home / {singleProduct.category} / {singleProduct.title}
                    </div>

                    {/* Product Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                                <img
                                    src={singleProduct.images[0]}
                                    alt={singleProduct.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {singleProduct.images.slice(1).map((image, index) => (
                                    <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`${singleProduct.title} view ${index + 2}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold text-gray-900">{singleProduct.title}</h1>
                            <p className="text-2xl font-bold text-gray-900">${singleProduct.price}</p>

                            <div className="border-t border-b py-4">
                                <h2 className="text-lg font-semibold mb-4">Description</h2>
                                <p className="text-gray-600">{singleProduct.description}</p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold">Specifications</h2>
                               
                            </div>

                            <div className="flex space-x-4">
                                <div className="flex items-center border rounded-md">
                                    <button className="px-4 py-2 text-gray-600 hover:text-gray-700">-</button>
                                    <span className="px-4 py-2">1</span>
                                    <button className="px-4 py-2 text-gray-600 hover:text-gray-700">+</button>
                                </div>
                                <button className="flex-1 bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}

                </div>

            }
        </>

    )
} 