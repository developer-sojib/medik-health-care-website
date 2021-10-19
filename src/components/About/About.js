import React from 'react';
import bg from './../images/breadcrumb-bg.jpg'
import m1 from './../images/m1.jpg'
import m2 from './../images/m2.jpg'
import m3 from './../images/m3.jpg'
import m4 from './../images/m4.jpg'

const About = () => {
    return (
        <div>
            <img width='100%' src={bg} alt="" />
            <h3 className='mt-5 mb-5'><b>Our Teams</b></h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <img className='img-fluid' src={m1} alt="" />
                        </div>
                        <h4 className='mt-2'>Alexander</h4>
                        <p>CEO</p>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img className='img-fluid' src={m2} alt="" />
                        </div>
                        <h4 className='mt-2'>Joshua</h4>
                        <p>Manager</p>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img className='img-fluid' src={m3} alt="" />
                        </div>
                        <h4 className='mt-2'>Olivia</h4>
                        <p>Supply Manager</p>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <img className='img-fluid' src={m4} alt="" />
                        </div>
                        <h4 className='mt-2'>Amelia</h4>
                        <p>Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;