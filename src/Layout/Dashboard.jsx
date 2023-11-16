
import { NavLink, Outlet } from 'react-router-dom';
import { MdAddShoppingCart, MdBook, MdRateReview } from "react-icons/md";
import { FaCalendar, FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className='flex gap-2'>
            <div className="w-64 min-h-screen  bg-blue-300 ">
                <ul className='menu '>
                    <li><NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink></li>

                    <li><NavLink to={'/dashboard/reservation'}>
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink></li>

                    <li><NavLink to={'/dashboard/cart'}><MdAddShoppingCart />My Cart</NavLink></li>

                    <li><NavLink to={'/dashboard/review'}>
                        <MdRateReview></MdRateReview>
                        My Review</NavLink></li>

                    <li><NavLink to={'/dashboard/bookings'}>
                        <MdBook></MdBook>
                        My Bookings</NavLink></li>

                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;