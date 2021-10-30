import React, { useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import logo from './../../../images/logo.png';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () =>
{
    const [isLogin, setIsLogin] = useState(false);
    const { message, setMessage, setIsLoading, loginUsingGoogle } = useAuth();

    /*-----------------------------------------------------
                Google login handler
    -------------------------------------------------------*/
    const location = useLocation();
    const history = useHistory();

    const handleGoogleLogIn = () =>
    {
        loginUsingGoogle()
            .then(result =>
            {
                history.push(location.state?.from || '/home')
            })
            .catch(error => { setMessage(error.message) })
            .finally(() => setIsLoading(false));
    };

    /*-----------------------------------------------------
        Implement toggle for login and register switcher 
    -------------------------------------------------------*/
    const toggleLogin = e =>
    {
        setIsLogin(e.target.checked);
        setMessage('');
    };

    return (
        <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center border border-2 rounded m-5 p-2">
                <div>
                    <Image src={logo} width="300px" height="100px" alt="Picnic In Heaven" fluid />
                </div>
                <h2 className="border-top mt-5 p-4 fw-light">
                    {
                        isLogin ? 'Log in to your account' : 'Sign Up with Picnic In Heaven'
                    }
                </h2>
                <button onClick={handleGoogleLogIn} className="btn btn-outline-primary fs-4">
                    <FcGoogle className="fs-1" /> {
                        isLogin ? 'Log in with Google' : 'Sign up with Google'
                    }
                </button>
                {
                    message && <Form.Text className="text-danger fw-bold">
                        {message}
                    </Form.Text>
                }
                <Form.Group className="m-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={toggleLogin} type="checkbox" label="Already have an account?" />
                </Form.Group>
            </div>
        </div>
    );
};

export default Login;