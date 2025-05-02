import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, BuildingOfficeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const Properties = () => {
  const [properties] = useState([
    {
      id: 1,
      title: 'Modern Apartment',
      price: '$250,000',
      location: 'New York, NY',
      type: 'Apartment',
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    },
    {
      id: 2,
      title: 'Luxury Villa',
      price: '$750,000',
      location: 'Los Angeles, CA',
      type: 'Villa',
      beds: 4,
      baths: 3,
      sqft: 3000,
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
    },
    {
      id: 3,
      title: 'Cozy House',
      price: '$350,000',
      location: 'Chicago, IL',
      type: 'House',
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    },
    // Add more properties as needed
  ])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">All Properties</h1>
        <div className="flex space-x-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>All Types</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Price Range</option>
            <option>$0 - $300,000</option>
            <option>$300,000 - $600,000</option>
            <option>$600,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div key={property.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-48 bg-gray-200 group-hover:opacity-75">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                <Link to={`/property/${property.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {property.title}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{property.location}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-medium text-gray-900">{property.price}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Properties 