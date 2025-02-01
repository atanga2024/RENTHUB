import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Home, BedDouble, Bath, DollarSign, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Sample data - In production, this would come from your API
const apartments = [
  {
    id: 1,
    title: 'Modern Downtown Loft',
    description: 'Stunning loft apartment with city views and modern amenities',
    price: 700,
    location: 'Odza, Yaounde',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    kitchen: 1,
    size: '1200 sqft',
    amenities: ['Parking', 'Gym', 'Pool', 'Pet Friendly'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3',
     // 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3',
      //'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 2,
    title: 'Cozy Studio in Brooklyn',
    description: 'Perfect starter apartment in a quiet neighborhood',
    price: 300,
    location: 'Mbengwi Road, Bamenda',
    type: 'studio',
    bedrooms: 2,
    bathrooms: 1,
    size: '600 sqft',
    amenities: ['AC', 'Heating', 'Laundry'],
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 3,
    title: 'Luxury House with Garden',
    description: 'Spacious family home with beautiful garden and modern kitchen',
    price: 2000,
    location: 'pk12, Douala',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    size: '2500 sqft',
    amenities: ['Garden', 'Garage', 'Smart Home', 'Security System'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 4,
    title: 'The Luxe Loft',
    description: 'For A High-end, Elegant Apartmeent REntal',
    price: 700,
    location: 'Bastos, Yaounde',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    kitchen: 1,
    size: '2500 sqft',
    amenities: ['Garden', 'Garage', 'Smart Home', 'Security System'],
    images: [
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLYUf17McBmTVlpzqGoid0vA7QkRNCDJPFgbIy',
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLYUf17McBmTVlpzqGoid0vA7QkRNCDJPFgbIy'
    ]
  },
  {
    id: 5,
    title: 'Solo Living Spot',
    description: 'Perfect For Business Travellers Or Solo explorers',
    price: 300,
    location: 'odza, Yaounde',
    type: 'studio',
    bedrooms: 2,
    bathrooms: 1,
    size: '600 sqft',
    amenities: ['AC', 'Heating', 'Laundry'],
    images: [
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLa8jzitwNpDoO3bujUi9IfLVTJZ4X7lgWC15G',
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLa8jzitwNpDoO3bujUi9IfLVTJZ4X7lgWC15G'
    ]
  },

  {
    id: 6,
    title: 'Minimalist Studio Stay',
    description: 'Sleek And Functional For Short Or Long Stays',
    price: 330,
    location: 'makepe, Douala',
    type: 'studio',
    bedrooms: 2,
    bathrooms: 1,
    size: '600 sqft',
    amenities: ['AC', 'Heating', 'Laundry'],
    images: [
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLy2QzPT2RzvNPnJodBADMXShYx8OW7Qfwi9g6',
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLy2QzPT2RzvNPnJodBADMXShYx8OW7Qfwi9g6'
    ]
  },

  {
    id: 7,
    title: 'The Creative Noook',
    description: 'Ideal For Artists, Writers And Remote Workers',
    price: 300,
    location: 'Sandpit, Buea',
    type: 'studio',
    bedrooms: 2,
    bathrooms: 1,
    size: '600 sqft',
    amenities: ['AC', 'Heating', 'Laundry'],
    images: [
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLStlcmlZxfLv1ne0YVMJQq2zRgBpwIad97P8l',
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLStlcmlZxfLv1ne0YVMJQq2zRgBpwIad97P8l'
    ]
  },

  {
    id: 8,
    title: 'Downtown Retreat',
    description: 'A Peacefull Escape In A Vibrant City',
    price: 700,
    location: 'Foot Market, Bamenda',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    size: '600 sqft',
    amenities: ['AC', 'Heating', 'Laundry'],
    images: [
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLFNMEw20ttMozdQPKwNVECyS0OhGv2fmUJA16',
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLFNMEw20ttMozdQPKwNVECyS0OhGv2fmUJA16'
    ]
  },

  {
    id: 9,
    title: 'Metroplolitan Livng',
    description: 'A Stylish Apartment In The Heart Of The City',
    price: 1200,
    location: 'Mendong, Yaounde',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    size: '600 sqft',
    amenities: ['AC', 'Heating', 'Laundry'],
    images: [
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLaHAvBOwNpDoO3bujUi9IfLVTJZ4X7lgWC15G',
      'https://0eejr711md.ufs.sh/f/11gUTfyOCcGLaHAvBOwNpDoO3bujUi9IfLVTJZ4X7lgWC15G'
    ]
  },


];

const Apartments = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredApartments = apartments.filter(apartment => {
    const matchesSearch = apartment.title.toLowerCase().includes(searchTerm) ||
                         apartment.location.toLowerCase().includes(searchTerm) ||
                         apartment.description.toLowerCase().includes(searchTerm);
    const matchesType = selectedType === 'all' || apartment.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleBook = (apartment) => {
    if (!user) {
      navigate('/login');
      return;
    }
    setSelectedApartment(apartment);
    setShowBookingModal(true);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    // Here you would handle the booking submission to your backend
    alert('Booking submitted successfully!');
    setShowBookingModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4 sm:px-6 lg:px-8">
      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Search by location, title, or description..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={handleSearch}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="studio">Studio</option>
          </select>
        </div>
      </div>

      {/* Apartments Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApartments.map(apartment => (
          <div key={apartment.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={apartment.images[0]}
                alt={apartment.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded">
                ${apartment.price}/month
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{apartment.title}</h3>
              <p className="text-gray-600 mb-2">{apartment.location}</p>
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center">
                  <BedDouble className="h-4 w-4 mr-1" />
                  {apartment.bedrooms}
                </span>
                <span className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  {apartment.bathrooms}
                </span>
                <span className="flex items-center">
                  <kitch className="h-4 w-4 mr-1" />
                  {apartment.kitchen}
                </span>
                <span className="flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  {apartment.size}
                </span>
              </div>
              <button
                onClick={() => handleBook(apartment)}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                View Details & Book
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedApartment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedApartment.title}</h2>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="relative mb-6">
                <img
                  src={selectedApartment.images[currentImageIndex]}
                  alt={`${selectedApartment.title} ${currentImageIndex + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex justify-center mt-2 gap-2">
                  {selectedApartment.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 w-2 rounded-full ${
                        currentImageIndex === index ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-2">Details</h3>
                  <p className="text-gray-600 mb-4">{selectedApartment.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedApartment.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Move-in Date
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Lease Duration (months)
                    </label>
                    <select
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows="3"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">
                        ${selectedApartment.price}
                        <span className="text-sm text-gray-500">/month</span>
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apartments;