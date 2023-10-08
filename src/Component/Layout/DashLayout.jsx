import React, { useContext } from 'react';
import { FaAppleAlt, FaChartBar, FaClipboardList, FaHome, FaShoppingBag, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/AdminHooks';
import useUser from '../../Hooks/UserHooks';
import { authProvider } from '../../Context/AuthContext';
import logo from '../../assets/download (4).png'

const DashLayout = () => {

    //use context
    const { user } = useContext(authProvider)

    console.log(user.email)

    //is admin
    const [isAdmin] = useAdmin(user?.email)

    //is user
    const [isUser] = useUser(user?.email)

    console.log(isUser)


    return (
        <div className=''>
            <div className='text-start'>
                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 pt-8 w-80 min-h-full bg-base-200 text-base-content">

                        <Link to={'/dashHome'} className="btn btn-ghost uppper-case text-white font-bold text-xl hover:bg-transparent mb-6"><img src={logo} className='w-32' alt="" /></Link>


                        <li><NavLink className={({ isActive }) => isActive ? 'bg-gradient-to-r from-red-600 to-orange-400  text-white rounded-sm mt-2 rounded-r-full shadow-xl' : 'text-black  text-decoration-none font-bold'} to={'/dashHome'}><FaHome></FaHome> Home</NavLink></li>


                        {
                            isAdmin &&
                            <>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-gradient-to-r from-red-600 to-orange-400  text-white rounded-sm mt-2 rounded-r-full shadow-xl' : 'text-black  text-decoration-none font-bold mt-2'} to={'/addChart'}><FaChartBar />Add Diet-Chart</NavLink></li>

                                <li><NavLink className={({ isActive }) => isActive ? 'bg-gradient-to-r mt-2 from-red-600 to-orange-400  text-white rounded-sm  rounded-r-full shadow-xl' : 'text-black  text-decoration-none font-bold mt-2'} to={'/totalCharts'}><FaClipboardList />Total Charts</NavLink></li>

                                <li><NavLink className={({ isActive }) => isActive ? 'bg-gradient-to-r from-red-600 to-orange-400  text-white rounded-sm mt-2 rounded-r-full shadow-xl' : 'text-black  text-decoration-none font-bold mt-2'} to={'/totalUser'}><FaUserCircle />Total Users</NavLink></li>
                            </>
                        }

                        {
                            isUser &&
                            <>
                                <li><NavLink className={({ isActive }) => isActive ? 'bg-gradient-to-r from-red-600 to-orange-400  text-white rounded-sm mt-2 rounded-r-full shadow-xl' : 'text-black  text-decoration-none font-bold mt-2'} to={'/myPlans'}><FaAppleAlt />My Plans</NavLink></li>

                                <li><NavLink className={({ isActive }) => isActive ? 'bg-gradient-to-r from-red-600 to-orange-400  text-white rounded-sm mt-2 rounded-r-full shadow-xl' : 'text-black  text-decoration-none font-bold mt-2'} to={'/myProfile'}><FaUserCircle />My Profile</NavLink></li>
                            </>
                        }

                        <li><Link className='text-black font-semibold mt-20' to={'/'}>Exit from Dashboard <FaSignOutAlt /></Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashLayout;