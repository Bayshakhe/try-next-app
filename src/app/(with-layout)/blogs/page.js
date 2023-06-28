import loadBlogData from '@/utils/loadBlogData';
import Link from 'next/link';
import React from 'react';
// const blogs = [
//     {
//         id:1,
//         year: 2016,
//         title: 'Title-1'
//     },
//     {
//         id:2,
//         year: 2017,
//         title: 'Title-2'
//     },
//     {
//         id:3,
//         year: 2018,
//         title: 'Title-3'
//     },
//     {
//         id:4,
//         year: 2019,
//         title: 'Title-4'
//     },
// ]

const BlogsPage = async () => {
    const blogs = await loadBlogData()
    return (
        <div className='container mx-auto grid grid-cols-4'>
            {
                blogs?.map(({id,title}) => <div className=' mx-auto border m-2 list-none p-2 w-full h-48 relative' key={id}>
                    <h1 className='font-bold'>{title}</h1>
                    <button className='btn btn-info absolute bottom-0'>
                    <Link href={`blogs/${id}`}>Details</Link>
                    </button>
                    
                </div>)
            }
        </div>
    );
};

export default BlogsPage;