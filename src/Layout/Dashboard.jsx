import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaComment, FaUserDoctor } from "react-icons/fa6";
import { FaHome, FaCalendar, FaCommentMedical } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"><FaCalendar />Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaComment />Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaCartShopping />My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myAppointments"><IoTimerSharp />Appointments</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/treatment"><FaUserDoctor />Our Treatment</NavLink>
                    </li>
                    <li>
                        <NavLink to="/appointment/all"><FaCommentMedical />Appointment</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;