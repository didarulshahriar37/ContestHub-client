import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../pages/shared/Loading';
import useRole from '../hooks/useRole';
import Error from '../pages/Error/Error';

const UserRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRole();

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'user') {
        return <Error></Error>
    }

    return children;
};

export default UserRoute;