import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
    return (
        <div className='relative overflow-hidden h-96 w-full rounded-lg group transition duration-300'> {/* Added transition */}
            <Link to={"/category" + category.href}>
                <div className='w-full h-full cursor-pointer'>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/60 transition duration-300 group-hover:bg-gray-800/80 z-10' /> {/* Adjusted gradient and added hover effect */}
                    <img
                        src={category.imageUrl}
                        alt={category.name}
                        className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
                        loading='lazy'
                    />
                    <div className='absolute bottom-0 left-0 right-0 p-4 z-20 transition duration-300'> {/* Added transition */}
                        <h3 className='text-gray-300 hover:text-red-300 text-2xl font-bold mb-2 transition duration-300'> {/* Adjusted text color and added transition */}
                            {category.name}
                        </h3>
                        <p className='text-gray-500 transition duration-300'> {/* Adjusted text color and added transition */}
                            Explore {category.name}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryItem;