import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Treatment from "../Pages/Treatments/Treatment/Treatment";
import Appointment from "../Pages/Book/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
// import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/ManageItems/UpdateItem";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
// import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import MyAppointments from "../Pages/Dashboard/MyAppointments/MyAppointments";
import Review from "../Pages/Dashboard/Review/Review";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
// import PrivateRoute from "./PrivateRoute"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "treatment",
                element: <Treatment></Treatment>
            },
            {
                path: "appointment/:category",
                element: <Appointment></Appointment>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        // element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            // admin
            {
                path: 'adminHome',
                element: <AdminHome></AdminHome>
            },
            // {
            //     path: 'manageBookings',
            //     element: <ManageBookings></ManageBookings>
            // },
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addItems',
                element: <AddItems></AddItems>
            },
            {
                path: 'updateItem/:id',
                element: <UpdateItem></UpdateItem>,
                loader: ({params}) => fetch(`https://pet-corner-backend.vercel.app/services/${params.id}`)
            },
            {
                path: 'manageItems',
                element: <ManageItems></ManageItems>
            },
            // user
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'myAppointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: 'review',
                element: <Review></Review>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            }
        ]
    }
]);
