
import { NavLink, Outlet } from 'react-router-dom';
import { MdAddShoppingCart, MdBook, MdRateReview } from "react-icons/md";
import { FaBook, FaCalendar, FaHome } from "react-icons/fa";
import useCart from '../hooks/useCart';

const Dashboard = () => {

    const [user, refetch] = useCart();
    return (
        <div className='flex gap-2'>
            <div className="w-64 min-h-screen bg-blue-300 ">
                <ul className='menu text-xl font-bold '>
                    <li><NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink></li>

                    <li><NavLink to={'/dashboard/reservation'}>
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink></li>

                    <li><NavLink to={'/dashboard/cart'}><MdAddShoppingCart />My Cart <span className='text-red-600'>({user.length})</span></NavLink></li>

                    <li><NavLink to={'/dashboard/review'}>
                        <MdRateReview></MdRateReview>
                        My Review</NavLink></li>

                    <li><NavLink to={'/dashboard/bookings'}>
                        <MdBook></MdBook>
                        My Bookings</NavLink></li>

                    <div className="divider"></div>




                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;