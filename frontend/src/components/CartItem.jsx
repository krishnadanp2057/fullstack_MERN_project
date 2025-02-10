import { Minus, Plus, Trash } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useCartStore();

    return (
        <div className="rounded-lg border p-4 shadow-md border-gray-700 bg-gray-200/50 backdrop-blur-sm transition duration-300 md:p-6"> {/* Added background, blur, and transition */}
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <div className="shrink-0 md:order-1">
                    <img className="h-20 md:h-32 rounded object-cover" src={item.image} alt={item.name} />
                </div>

                <label className="sr-only">Choose quantity:</label>

                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center gap-2">
                        <button
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-600 bg-red-900 hover:bg-red-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" // Added transition
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        >
                            <Minus className="text-white hover:text-gray-500 transition duration-300" /> {/* Adjusted icon color and added transition */}
                        </button>
                        <p className="text-black transition duration-300">{item.quantity}</p> {/* Adjusted text color and added transition */}
                        <button
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-700 bg-red-900 hover:bg-red-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500" // Added transition
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        >
                            <Plus className="text-white hover:text-gray-500 transition duration-300" /> {/* Adjusted icon color and added transition */}
                        </button>
                    </div>

                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-red-900 transition duration-300"> {/* Added transition */}
                            ${item.price}
                        </p>
                    </div>
                </div>

                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <p className="text-base font-medium text-black hover:text-red-500 hover:underline transition duration-300"> {/* Adjusted text color and added transition */}
                        {item.name}
                    </p>
                    <p className="text-sm text-black transition duration-300">{item.description}</p> {/* Adjusted text color and added transition */}

                    <div className="flex items-center gap-4">
                        <button
                            className="inline-flex items-center text-sm font-medium text-red-900 hover:text-red-500 hover:underline transition duration-300" // Added transition
                            onClick={() => removeFromCart(item._id)}
                        >
                            <Trash className="transition duration-300" /> {/* Added transition */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;