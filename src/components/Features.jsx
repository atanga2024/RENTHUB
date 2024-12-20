import { Home, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    name: 'Verified Listings',
    description: 'All our listings go through a rigorous verification process to ensure authenticity.',
    icon: Shield,
  },
  {
    name: 'Real-time Updates',
    description: 'Get instant notifications about new properties and updates on your applications.',
    icon: Clock,
  },
  {
    name: 'Trusted Community',
    description: 'Join our community of verified tenants and property owners.',
    icon: Users,
  },
  {
    name: 'Wide Selection',
    description: 'Browse through thousands of properties to find your perfect match.',
    icon: Home,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Why Choose RentHub</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to find your next home
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've streamlined the rental process to make it easier than ever to find and secure your perfect rental property.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-600">
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">{feature.name}</dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}