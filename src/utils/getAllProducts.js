const getAllProducts = async (categoryId) => {
    if (categoryId) {
        const res = await fetch(`http://localhost:5000/products/?categoryId=${categoryId}`, {
            cache: 'no-cache'
        })
        return res.json()
    }
};

export default getAllProducts;