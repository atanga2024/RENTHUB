import React from 'react';
import { Card } from 'react-bootstrap'; 

const HouseCard = ({ property }) => {
  return (
    <Card>
      <Card.Img variant="top" src={property.imageUrl} />
      <Card.Body>
        <Card.Title>{property.name}</Card.Title>
        <Card.Text>{property.location}</Card.Text>
        <Card.Text>Monthly Price: ${property.price}</Card.Text>
        <Card.Link href={`/properties/${property.id}`}>Details</Card.Link> 
      </Card.Body>
    </Card>
  );
};

export default HouseCard;