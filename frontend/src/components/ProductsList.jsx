import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../stores/useProductStore";

const ProductsList = () => {
    const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();

    return (
        <motion.div
            className="bg-red-900/80 backdrop-blur-sm shadow-md rounded-lg overflow-hidden max-w-6xl mx-auto transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <table className="w-full divide-y divide-black">
                <thead className="bg-gray-700">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                            Product
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                            Price
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                            Category
                        </th>

                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                            Featured
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-black"> {/* Removed bg-gray-800 here */}
                    {products?.map((product) => (
                        <tr key={product._id} className="hover:bg-gray-700 transition duration-300">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                            className="h-10 w-10 rounded-full object-cover"
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-white hover:text-white transition duration-300">
                                            {product.name}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-white">
                                    ${product.price.toFixed(2)}
                                </div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-white">{product.category}</div>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    onClick={() => toggleFeaturedProduct(product._id)}
                                    className={`p-1 rounded-full transition duration-200 ${
                                        product.isFeatured
                                            ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
                                            : "bg-gray-600 text-gray-400 hover:bg-gray-500"
                                    }`}
                                >
                                    <Star className="h-5 w-5" />
                                </button>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                    onClick={() => deleteProduct(product._id)}
                                    className="text-white hover:text-red-300 transition duration-300"
                                >
                                    <Trash className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

export default ProductsList;