import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        <li><Link to={'/signup'}>Register</Link></li>
        <li>
            <Link to={'/'}>
                <div className="badge badge-secondary">+0</div>
                <div className="text-3xl"> <CiShoppingCart /></div>
            </Link>
        </li>




    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end">
                <Link className=" mr-5 bg-white p-2 font-bold text-blue-600 rounded-full">{user?.displayName}
                </Link>


                {
                    user ?
                        <>
                            <div>
                                <Link onClick={handleLogout}>Log Out</Link>
                            </div>
                        </> :
                        <>   <li><Link to={'/login'}>Login</Link></li>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;