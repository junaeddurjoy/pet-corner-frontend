import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaCartShopping, FaComment, FaEnvelope, FaUserDoctor } from "react-icons/fa6";
import { FaHome, FaCalendar, FaCommentMedical, FaListAlt, FaUserFriends } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";
import { IoLogOutSharp } from "react-icons/io5";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { MdPets } from "react-icons/md";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/login');
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
            <Link to={'/'}><p className="text-2xl pl-4 flex items-center gap-3 py-3 hover:text-white"><MdPets />Pet Corner</p></Link>
                <ul className="menu">
                    
                    {
                        isAdmin ?
                            <>
                                {/* <li>
                                    <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/dashboard/addItems"><IoIosAddCircle />Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems"><FaListAlt />Manage Items</NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/dashboard/manageBookings"><FaBookMedical />Manage Bookings</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/dashboard/allUsers"><FaUserFriends />All Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaCartShopping />My Cart</NavLink>
                                </li>
                            </>
                            :
                            <>
                                {/* <li>
                                    <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink>
                                </li> */}
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
                                    <NavLink to="/dashboard/myAppointments"><IoTimerSharp />My Appointments</NavLink>
                                </li>
                            </>
                    }
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
                    <li>
                        <NavLink to="/contact"><FaEnvelope />Contact</NavLink>
                    </li>
                    <li>
                        <div onClick={handleLogOut}><IoLogOutSharp />Log Out</div>
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