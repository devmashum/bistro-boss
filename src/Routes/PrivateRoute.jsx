
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    // User jei location ea silo sei location ea login korar por return korar jonno 
    const location = useLocation();



    //User na thakle loading hoyea chole jabe 
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }
    // state={{ from: location }} replace eita use korte hobe user login korar purbo mohurto porjonto jeikhane silo seikhane login korar por auto chole jawar jonno abong login page er moddhe const navigate = useNavigate(); const location = useLocation(); const from = location.state?.from?.pathname || '/'; sweetalert er por  navigate(from, { replace: true }); dite hobe 

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;