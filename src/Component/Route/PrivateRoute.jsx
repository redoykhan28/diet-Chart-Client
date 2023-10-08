import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { authProvider } from '../../Context/AuthContext';
import Loader from '../Loader/Loader';

const PrivateRoute = ({ children }) => {

    //location
    const location = useLocation()

    const { user, loader } = useContext(authProvider)
    // console.log(loader)

    if (!user && loader) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }

    return <Nevigate to={'/login'} state={{ from: location }} replaced></Nevigate>
};

export default PrivateRoute;