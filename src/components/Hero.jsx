import { Search, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-16">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find Your Perfect Rental Space
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your one-stop destination for finding the perfect rental property. Browse through our extensive collection
              of verified listings and connect with trusted property owners.
            </p>
            
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <button className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700">
                <Search className="mr-2 h-5 w-5" />
                Search
              </button>
            </div>

            <div className="mt-10 flex items-center gap-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">1000+</span>
                <span className="text-sm text-gray-600">Listed Properties</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">500+</span>
                <span className="text-sm text-gray-600">Happy Tenants</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900">100%</span>
                <span className="text-sm text-gray-600">Verified Listings</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Modern apartment interior"
          />
        </div>
      </div>
    </div>
  );
}