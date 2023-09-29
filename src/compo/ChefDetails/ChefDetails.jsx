import React from 'react';
import Header from '../Navbar/Header';
import { useLoaderData } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {
    const chefData = useLoaderData();
    const { name, image, recipes, chef_details } = chefData;
    console.log(chefData)
    return (
        <div>
            <Header></Header>
            <Container className='d-flex align-items-center justify-content-center gap-5'>
                <div>
                    <img className='p-5' style={{ width: '25rem', height: '30rem' }} src={image} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>{chef_details}</p>
                </div>
            </Container>
            <Container>
                <h2 className='text-danger text-center fs-2'>Some Of His Signature Item</h2>
                <hr />
            </Container>
            <Container className='row row-cols-sm-1 row-cols-lg-3 mx-auto'>
                {
                    recipes.map(recipe => <Recipe
                        recipe={recipe}
                        key={''}
                    ></Recipe>)
                }
            </Container>
        </div>
    );
};

export default ChefDetails;