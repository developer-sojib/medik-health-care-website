import React from 'react';
import './Footer.css'
import logo from './../components/images/logo2.png'

//
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faGithub, faTwitter, faLinkedin);


const Footer = () => {
    return (
        <div className='bg-dark text-white pt-5 pb-2'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4">
                        <img width='150px' src={logo} alt="" />
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                        <input className='p-2 border-0 rounded-3' type="email" /><button className='btn btn-primary'>Subscribe</button>
                    </div>
                    <div className="col-md-4">
                        <FontAwesomeIcon className='me-3' icon={faFacebookF} />
                        <FontAwesomeIcon className='me-3' icon={faGithub} />
                        <FontAwesomeIcon className='me-3' icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4 text-start">
                        <h5 className='mb-4'>Contact us</h5>
                        <p>1203 Town Drive 33458 USA</p>
                        <p>+0000 123 456789</p>
                        <p>info@example.com</p>
                    </div>
                    <div className="col-md-4 text-start">
                        <h5 className='ms-4'>Help</h5>
                        <ul className='help-list'>
                            <li>Search</li>
                            <li>Help</li>
                            <li>Information</li>
                            <li>Privacy Policy</li>
                            <li>Shipping Details</li>
                        </ul>

                    </div>
                    <div className="col-md-4 text-start">
                        <h5 className='ms-4'>Support</h5>
                        <ul className='help-list'>
                            <li>Contact us</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Refunds & Returns</li>
                            <li>Delivers</li>
                        </ul>

                    </div>
                </div>
                <hr />
                <p className='text-center'>MEDIC Website With React © Abdul Awal Sojib 2021 || All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;