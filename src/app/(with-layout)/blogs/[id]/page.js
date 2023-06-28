import loadSingleBlogData from '@/utils/loadSingleBlogData';
import React from 'react';
export const generateMetadata = async ({params}) => {
    const { title } = await loadSingleBlogData(params.id)
    return {
        title: title
    }
}

const SinglePage = async ({ params }) => {
    const { id, body, title } = await loadSingleBlogData(params.id)
    return (
        <div>
            <div className='w-[600px] mx-auto border m-2 list-none p-2'>
                <h1 className='font-bold'>{id}. {title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default SinglePage;