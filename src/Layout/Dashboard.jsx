
import { NavLink, Outlet } from 'react-router-dom';
import { MdAddShoppingCart, MdBook, MdRateReview } from "react-icons/md";
import { FaBook, FaCalendar, FaHome, FaList, FaMailBulk, FaUsers, FaUtensils } from "react-icons/fa";
import useCart from '../hooks/useCart';

const Dashboard = () => {

    const [user] = useCart();
    // TODO: get isAdmin value from the database
    const isAdmin = true;
    return (
        <div className='flex gap-2'>
            <div className="w-64 min-h-screen bg-blue-300 ">
                <ul className='menu text-xl font-bold '>
                    {
                        isAdmin ? <>     <li><NavLink to={'/dashboard/adminHome'}><FaHome />Admin Home</NavLink></li>

                            <li><NavLink to={'/dashboard/addItems'}>
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink></li>

                            <li><NavLink to={'/dashboard/manageItems'}>
                                <FaList></FaList>
                                Manage Items</NavLink></li>

                            <li><NavLink to={'/dashboard/bookings'}>
                                <FaBook></FaBook>
                                Manage Booking</NavLink></li>

                            <li><NavLink to={'/dashboard/users'}>
                                <FaUsers></FaUsers>
                                All Users</NavLink></li></>

                            // 
                            :

                            <>
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
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>

                    <li><NavLink to={'/'}><FaHome />Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}>
                        <FaBook />

                        Menu</NavLink></li>
                    <li><NavLink to={'/order/salad'}>
                        <FaMailBulk></FaMailBulk>

                        Contact</NavLink></li>


                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;