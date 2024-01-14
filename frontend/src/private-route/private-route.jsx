import { Navigate } from "react-router-dom";
import { useLocalState } from "../until/useLocalStorage";


function PrivateRoute({children}) {
    const [jwt, setJwt] = useLocalState("", "jwt")
    return jwt ? children : <Navigate to="/signin" />
}
export default PrivateRoute
