import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import './Chef.css'
import { Container } from 'react-bootstrap';

const Chef = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <Container>
            <h3 className='fs-2 text-danger mt-4 text-center'>Our Professional Chefs</h3>
            <hr />
            <div className='chef-card'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.unique_id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </Container>
    );
};

export default Chef;