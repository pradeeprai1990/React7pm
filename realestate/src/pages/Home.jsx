import { Link } from 'react-router-dom'
import { HomeIcon, BuildingOfficeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const Home = () => {
  const featuredProperties = [
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
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Home
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover the perfect property that matches your lifestyle and preferences.
          </p>
          <div className="mt-10">
            <Link
              to="/properties"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Featured Properties</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
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

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-500">
              We provide exceptional service and expertise in the real estate market.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <HomeIcon className="mx-auto h-12 w-12 text-blue-500" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Guidance</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our experienced agents will guide you through every step of the process.
                </p>
              </div>
              <div className="text-center">
                <BuildingOfficeIcon className="mx-auto h-12 w-12 text-blue-500" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Quality Properties</h3>
                <p className="mt-2 text-base text-gray-500">
                  We carefully select and verify each property to ensure the highest quality.
                </p>
              </div>
              <div className="text-center">
                <CurrencyDollarIcon className="mx-auto h-12 w-12 text-blue-500" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Best Value</h3>
                <p className="mt-2 text-base text-gray-500">
                  We help you find the best value for your investment in the real estate market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 