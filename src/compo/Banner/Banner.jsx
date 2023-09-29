import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Card className="bg-dark text-danger">
                <Image className='opacity-50' src="https://img.freepik.com/premium-photo/smiling-male-chef-traditional-white-uniform_942932-15.jpg?w=900" fluid />
                <Card.ImgOverlay className=' d-flex align-items-center justify-content-center p-5 gap-5 '>

                    <div>
                        <p className='text-light fs-3'>GULLIVER PRIVATE CHEF</p>
                        <h3 className='fs-1'>Indulge in the Finest <br />Culinary Delights</h3>
                        <p className='fs-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis unde omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus quia nostrum nam sit ullam adipisci dicta repudiandae eligendi vel!</p>
                    </div>
                    <div>
                        <Image src="https://img.freepik.com/free-photo/young-baker-holding-some-bread-thinking_1368-9856.jpg?w=740&t=st=1696012409~exp=1696013009~hmac=0576621e98b3f56e325f93843274daba80076dbe3d1563ad050ebd163ad8bedc" fluid />
                    </div>

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Banner;