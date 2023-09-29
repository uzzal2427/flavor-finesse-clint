import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { name, image, unique_id } = chef
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Image style={{height:'15rem'}} src={image} fluid />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to={`/chefDetails/${unique_id}`}><Button variant="danger">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCard;