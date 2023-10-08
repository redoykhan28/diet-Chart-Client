import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';
import logo from '../../assets/download (1).png'
import { FaTachometerAlt } from 'react-icons/fa';

const Header = () => {

    //use context
    const { user, logout } = useContext(authProvider)


    //handle logout
    const handleLogout = () => {

        logout()
            .then(res => {
            })

    }

    //for fixed nav
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var navbar = document.querySelector('.navbar');

        // You can adjust the value (e.g., 0.5) to control the parallax effect speed
        navbar.style.transform = 'translateY(' + scrollPosition * 0.6 + 'px)';
    });

    return (
        <div className='w-full nvbg pt-5 pb-14'>
            <div className="navbar  w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost text-white font-bold  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user ?
                                    <div className='flex flex-col justify-center items-center'>

                                        <Link to={'/dashHome'} className=" text-black mx-1">DashBoard</Link>

                                        <Link onClick={handleLogout} to={'/login'} className="  hover:text-black text-red-400">Logout</Link>
                                    </div>
                                    :
                                    <Link to={'/login'} className="  hover:text-black text-green-600  mx-1">Login</Link>
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost uppper-case text-white font-bold text-xl hover:bg-transparent"><img src={logo} className='w-40' alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    {
                        user ?
                            <div className='flex justify-center items-center'>

                                <div className='flex items-center text-white hover:text-base-200'>
                                    <span className=''>                                    <FaTachometerAlt /></span>
                                    <Link to={'/dashHome'} className=" font-semibold mx-1 md:mr-5"> DashBoard</Link>
                                </div>

                                <Link onClick={handleLogout} to={'/login'} className="btn bg-white px-10  text-[#3CBD72]  hover:bg-base-200 rounded-full mx-1">Logout</Link>
                            </div>
                            :
                            <Link to={'/login'} className="btn bg-white px-10  text-[#3CBD72]  hover:bg-base-20 rounded-full mx-1">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;