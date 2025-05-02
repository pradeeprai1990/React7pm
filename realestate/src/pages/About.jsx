import { BuildingOfficeIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'

const About = () => {
  const features = [
    {
      name: 'Expert Team',
      description: 'Our team of experienced real estate professionals is dedicated to helping you find your dream home.',
      icon: UserGroupIcon,
    },
    {
      name: 'Quality Properties',
      description: 'We carefully select and verify each property to ensure the highest quality for our clients.',
      icon: BuildingOfficeIcon,
    },
    {
      name: 'Award Winning',
      description: 'Recognized as one of the top real estate agencies in the region for our exceptional service.',
      icon: TrophyIcon,
    },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We are dedicated to helping you find your perfect home and making your real estate journey smooth and enjoyable.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gray-50 rounded-lg px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-500">
              To provide exceptional real estate services that help our clients achieve their property goals,
              whether they're buying, selling, or investing in real estate. We strive to build lasting
              relationships with our clients through trust, transparency, and outstanding service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 