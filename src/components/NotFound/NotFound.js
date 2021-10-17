import React from 'react';
import './Notfound.css';
import notfoundimg from './../images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img width='100%' height='600vh' src={notfoundimg} alt="" />
        </div>
    );
};

export default NotFound;