import getAllCategories from "@/utils/getAllCategories"
import SingleCategories from "./SingleCategories";

const Categories = async () => {
    const categories = await getAllCategories()
    return (
        <div className="container mx-auto">
            {
                categories.map(category => <SingleCategories key={category.id} category={category}></SingleCategories>)
            }
        </div>
    );
};

export default Categories;