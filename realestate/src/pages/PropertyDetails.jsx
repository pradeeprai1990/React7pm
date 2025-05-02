import { useParams } from 'react-router-dom'
import { HomeIcon, BuildingOfficeIcon, CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/outline'

const PropertyDetails = () => {
  const { id } = useParams()

  // This would typically come from an API or database
  const property = {
    id: parseInt(id),
    title: 'Modern Apartment',
    price: '$250,000',
    location: 'New York, NY',
    type: 'Apartment',
    beds: 2,
    baths: 2,
    sqft: 1200,
    description: 'Beautiful modern apartment in the heart of New York City. This spacious 2-bedroom, 2-bathroom apartment features high ceilings, large windows, and a modern kitchen. The building offers amenities including a fitness center, rooftop terrace, and 24/7 concierge service.',
    features: [
      'Modern Kitchen',
      'High Ceilings',
      'Large Windows',
      'Fitness Center',
      'Rooftop Terrace',
      '24/7 Concierge',
    ],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227',
    ],
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Image Gallery */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{property.title}</h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{property.price}</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{property.description}</p>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-gray-400" />
              <p className="ml-2 text-sm text-gray-500">{property.location}</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <HomeIcon className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">{property.beds} beds</span>
              </div>
              <div className="flex items-center">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">{property.baths} baths</span>
              </div>
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-500">{property.sqft} sqft</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Features</h3>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {property.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 text-sm text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <button
              type="button"
              className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails 