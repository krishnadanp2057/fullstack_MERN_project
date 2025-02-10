import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
    const { user, logout } = useUserStore();
    const isAdmin = user?.role === "admin";
    const { cart } = useCartStore();

    const redClass = 'bg-red-900 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'; // Red class

    return (
        <header className='fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-40 transition-all duration-300 border-b border-gray-200'>
            <div className='container mx-auto px-4 py-3'>
                <div className='flex flex-wrap justify-between items-center'>
                    <Link to='/' className='text-2xl font-bold text-gray-800 items-center space-x-2 flex'>
                        Lynx & Luxe
                    </Link>

                    <nav className='flex flex-wrap items-center gap-4'>
                        <Link
                            to={"/"}
                            className='text-gray-700 hover:text-gray-800 transition duration-300 ease-in-out'
                        >
                            Home
                        </Link>
                        {user && (
                            <Link
                                to={"/cart"}
                                className='relative group text-gray-700 hover:text-gray-800 transition duration-300 ease-in-out'
                            >
                                <ShoppingCart className='inline-block mr-1 group-hover:text-gray-800' size={20} />
                                <span className='hidden sm:inline'>Cart</span>
                                {cart.length > 0 && (
                                    <span
                                        className='absolute -top-2 -left-2 bg-yellow-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-yellow-600 transition duration-300 ease-in-out'
                                    >
                                        {cart.length}
                                    </span>
                                )}
                            </Link>
                        )}
                        {isAdmin && (
                            <Link
                                className={redClass} // Red for admin dashboard
                                to={"/secret-dashboard"}
                            >
                                <Lock className='inline-block mr-1' size={18} />
                                <span className='hidden sm:inline'>Dashboard</span>
                            </Link>
                        )}

                        {user ? (
                            <button
                                className={redClass} // Red for logout
                                onClick={logout}
                            >
                                <LogOut size={18} />
                                <span className='hidden sm:inline ml-2'>Log Out</span>
                            </button>
                        ) : (
                            <>
                                <Link
                                    to={"/signup"}
                                    className={redClass} // Red for signup
                                >
                                    <UserPlus className='mr-2' size={18} />
                                    Sign Up
                                </Link>
                                <Link
                                    to={"/login"}
                                    className={redClass} // Red for login
                                >
                                    <LogIn className='mr-2' size={18} />
                                    Login
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;