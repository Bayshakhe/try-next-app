import Link from 'next/link';
import React from 'react';
import Navlink from '../components/Navlink';

const NavLists = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product'
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Product'
    },
    {
        path: '/',
        title: 'Home'
    },
]

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex'>
            <nav className='flex flex-col mx-5 my-3'>
                <h1 className='font-bold text-xl'>Dashboard</h1>
                <ul className=''>
                    {NavLists.map(({ path, title }) => <li className='mt-8' key={path}><Navlink exact activeClassname={'text-blue-600 font-semibold'} href={path}>{title}</Navlink></li>)}
                </ul>
            </nav>
            <div className='ml-8 mt-3'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;