import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Card className="bg-white text-dark">
                <Image src="https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" fluid />
                <Card.ImgOverlay>
                    <Container style={{ height: '800px' }} className='d-flex align-items-center justify-content-center'>
                        <div>
                            <p className='text-danger fs-3'>GULLIVER PRIVATE CHEF</p>
                            <h3 className='fs-1'>Indulge in the Finest <br />Culinary Delights</h3>
                            <p className='fs-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis unde omnis.</p>
                        </div>
                        <div>
                            <Image src="https://media.istockphoto.com/id/1477775536/photo/confident-pizza-chef-with-crossed-arms-in-the-kitchen.jpg?s=1024x1024&w=is&k=20&c=8DMOzsDdLzuwRMt_BlCwJ4BlYP_DZfMQma2eUUjKM_8=" fluid />
                        </div>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;