import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Recipe = ({ recipe }) => {
    const { name, food_image, description, rating } = recipe;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={food_image} />
                <Card.Body className='d-flex flex-column '>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <span className='text-danger'>Rating: {rating}</span>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipe;