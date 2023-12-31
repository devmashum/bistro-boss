import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";

import SignUp from "../Pages/Register/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Dashboard/Cart";
import AllUsers from "../Dashboard/AllUsers";
import AddItems from "../Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Dashboard/ManageItem";
import UpdateItem from "../Dashboard/UpdateItem";
import Payment from "../Dashboard/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'menu',
                element: <PrivateRoute><Menu></Menu></PrivateRoute>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            // Admin Routes
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'additems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>

            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/menu/${params.id}`)
            }
        ]
    }
]);