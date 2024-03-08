import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    console.log("asdfasdfasdfasdf",cart.length);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'treatment'}>Our Treatments</Link></li>
        <li><Link to={'appointment/all'}>Appointment</Link></li>
        <li>
            <Link to={'/dashboard/cart'}>
                <button className="btn">
                    <FaCartShopping />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><Link to={'/'}>Pet Corner</Link></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  items-center justify-center">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <><Link><a onClick={handleLogOut} className="btn">LogOut</a></Link></>
                            :
                            <><Link to={'login'}><a className="btn">LogIn</a></Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;