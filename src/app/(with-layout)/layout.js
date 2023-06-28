import React from 'react';
import Navbar from '../components/Navbar';

const WithLayout = ({ children }) => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;