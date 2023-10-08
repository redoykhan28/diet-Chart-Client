import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home"
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import DashLayout from "../Layout/DashLayout";
import DashHome from "../DashBoard/DashHome";
import AddChart from "../DashBoard/AddChart";
import TotalUser from "../DashBoard/TotalUser";
import TotalCharts from "../DashBoard/TotalCharts";
import MyPlans from "../DashBoard/MyPlans";
import AdminRoute from "./AdminRoute";
import MyProfile from "../DashBoard/MyProfile";
import SetPsd from "../Login/SetPsd";

//setup route
export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/setpsd',
                element: <SetPsd></SetPsd>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/',
        element: <PrivateRoute><DashLayout></DashLayout></PrivateRoute>,
        children: [
            {
                path: '/dashHome',
                element: <PrivateRoute><DashHome></DashHome></PrivateRoute>
            },
            {
                path: '/addChart',
                element: <AdminRoute><AddChart></AddChart></AdminRoute>
            },
            {
                path: '/totalUser',
                element: <AdminRoute><TotalUser></TotalUser></AdminRoute>
            },
            {
                path: '/totalCharts',
                element: <AdminRoute><TotalCharts></TotalCharts></AdminRoute>
            },
            {
                path: '/myPlans',
                element: <PrivateRoute><MyPlans></MyPlans></PrivateRoute>
            },
            {
                path: '/myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },

        ]

    }
])