import initializeAuthentication from './../Pages/Auth/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

/*-------------------------------------------------------------------
    Custom hook as useFirebase() for all firebase authentication code
---------------------------------------------------------------------*/
initializeAuthentication();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');

    const auth = getAuth();

    /*-----------------------------------------------------
                    Google Authentication panel 
    -------------------------------------------------------*/
    const loginUsingGoogle = () =>
    {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(() =>
    {
        const unsubscribed = onAuthStateChanged(auth, (user) =>
        {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            };
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    /*-----------------------------------------------------
                        Logout panel 
    -------------------------------------------------------*/
    const logOut = () =>
    {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };

    return { user, isLoading, message, setMessage, setIsLoading, loginUsingGoogle, logOut };
};

export default useFirebase;