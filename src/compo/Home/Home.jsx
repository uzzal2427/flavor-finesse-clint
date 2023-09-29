import React from 'react';
import { Card, Navbar } from 'react-bootstrap';
import Header from '../Navbar/Header';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Chef></Chef>
        </div>
    );
};

export default Home;