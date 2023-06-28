const getAllCategories = async () => {
    const res = await fetch('http://localhost:5000/categories', {
        // cache: 'force-cache'
        next:{
            revalidate: 10,
        }
    })
    return res.json()
};

export default getAllCategories;