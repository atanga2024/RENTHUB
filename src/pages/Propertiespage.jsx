import React, { useState } from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  { id: 1, name: 'House 1', description: 'Description 1', price: 1000, location: 'Yaounde' },
  { id: 2, name: 'House 2', description: 'Description 2', price: 2000, location: 'Buea' },
  { id: 3, name: 'House 3', description: 'Description 3', price: 3000, location: 'Douala' },
];

const PropertiesPage = () => {
  const [filterLocation, setFilterLocation] = useState('');
  const [filterPriceRange, setFilterPriceRange] = useState({ min: 0, max: Infinity });
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = properties.filter((property) => {
    const lowerCaseLocation = property.location.toLowerCase();
    const lowerCaseName = property.name.toLowerCase();
    return (
      lowerCaseLocation.includes(filterLocation.toLowerCase()) &&
      property.price >= filterPriceRange.min &&
      property.price <= filterPriceRange.max &&
      lowerCaseName.includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="properties-page">
      <h1>Properties</h1>
      <div className="filter-and-search">
        <input
          type="text"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          placeholder="Filter by location"
        />
        <input
          type="number"
          value={filterPriceRange.min}
          onChange={(e) => setFilterPriceRange({ ...filterPriceRange, min: e.target.value })}
          placeholder="Min price"
        />
        <input
          type="number"
          value={filterPriceRange.max}
          onChange={(e) => setFilterPriceRange({ ...filterPriceRange, max: e.target.value })}
          placeholder="Max price"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name"
        />
      </div>
      <div className="properties-list">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;