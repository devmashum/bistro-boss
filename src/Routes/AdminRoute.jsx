import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";



const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    //User na thakle loading hoyea chole jabe 
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children;
    }
    // state={{ from: location }} replace eita use korte hobe user login korar purbo mohurto porjonto jeikhane silo seikhane login korar por auto chole jawar jonno abong login page er moddhe const navigate = useNavigate(); const location = useLocation(); const from = location.state?.from?.pathname || '/'; sweetalert er por  navigate(from, { replace: true }); dite hobe 

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>

};

export default AdminRoute;