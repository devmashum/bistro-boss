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
                element: <PrivateRoute><Order></Order></PrivateRoute>
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
]);