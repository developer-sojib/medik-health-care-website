import React from 'react';
import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from './../ServiceDetails/ServiceDetails';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakedb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (

        <div>
            <div className="text-center mt-5 mb-5">
                <h2><b>Our Services</b></h2>
            </div>
            <div className='container mb-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <ServiceDetails service={service}
                            key={service.id} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;