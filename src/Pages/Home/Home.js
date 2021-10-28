import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () =>
{
    const { loginUsingGoogle } = useAuth();
    console.log(loginUsingGoogle);
    return (
        <div>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;