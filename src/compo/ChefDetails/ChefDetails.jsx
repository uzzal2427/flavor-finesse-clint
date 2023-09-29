import React from 'react';
import Header from '../Navbar/Header';
import { useLoaderData } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';

const ChefDetails = () => {
    const chefData = useLoaderData();
    const { name, image, recipes, chef_details } = chefData;
    console.log(chefData)
    return (
        <div>
            <Header></Header>
            <Container className=' d-flex align-items-center justify-content-center'>
                <div>
                    <Image className='p-5' src={image} fluid />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{chef_details}</p>

                </div>
            </Container>
        </div>
    );
};

export default ChefDetails;