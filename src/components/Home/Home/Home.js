import React from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from './../../images/slider1.jpg'
import slider2 from './../../images/slider2.jpg'
import slider3 from './../../images/slider3.jpg'
import Header from '../../Header/Header';

const Home = () => {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="First slide"
                        />
                    </Carousel.Item>

                </Carousel>
            </div>
            <div className="meter-area mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="ms-2 col-md-4 bg-light  p-5 rounded text-start">
                            <h2>Ear Thermometer
                            </h2>
                            <p>This thermotre is on of the best thermoetre in our country. here you get only $250</p>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                        <div className="ms-5 col-md-7 bg-primary  p-5 rounded text-white text-start">
                            <h2>Free Shipping
                            </h2>
                            <h1><span className='fw-bold'>35%</span> OFF</h1>
                            <p>You can get up to 35% off from any product from us</p>
                            <button className="btn btn-light text-primary">See All Products</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;