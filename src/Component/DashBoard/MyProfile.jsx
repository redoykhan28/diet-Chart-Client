import React, { useContext } from 'react';
import profile from '../../assets/blank-profile-picture-973460_960_720.jpg'
import { authProvider } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

const MyProfile = () => {

    const { user, logout } = useContext(authProvider)

    //handle logout
    const handleLogout = () => {

        logout()
            .then(res => {
            })

    }

    return (
        <div className='mt-36'>
            <div className="card  w-96 mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={profile} />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    <div className="card-actions">
                        <Link onClick={handleLogout} to={'/login'} className="btn bg-white shadow-lg px-10  text-red-400 mt-4 hover:bg-red-400 hover:text-white rounded-lg">Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;