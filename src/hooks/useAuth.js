import { useContext } from "react"
import { AuthContext } from "./../Context/AuthProvider"

/*-----------------------------------------------------
        custom hook as useAuth() to pass context API
-------------------------------------------------------*/

const useAuth = () =>
{
    return useContext(AuthContext);
};

export default useAuth;