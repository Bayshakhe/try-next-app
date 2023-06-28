import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleCategories = ({category}) => {
    const {id, name} = category
    return (
        <div className='flex gap-3'>
            <p>{id}.</p>
            <Link href={`/products?categoryId=${id}`}>
            <p>{name}</p>
            </Link>
            
        </div>
    );
};

export default SingleCategories;