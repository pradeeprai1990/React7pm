import { Link } from 'react-router-dom'
import { HomeIcon, BuildingOfficeIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                RealEstate
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </Link>
              <Link
                to="/properties"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                <BuildingOfficeIcon className="h-5 w-5 mr-1" />
                Properties
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                <InformationCircleIcon className="h-5 w-5 mr-1" />
                About
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                <PhoneIcon className="h-5 w-5 mr-1" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 