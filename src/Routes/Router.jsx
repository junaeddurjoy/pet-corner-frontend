import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Treatment from "../Pages/Treatments/Treatment/Treatment";
import Appointment from "../Pages/Book/Appointment/Appointment";
import Login from "../Pages/Login/Login";
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
            }
        ]
    },
]);
