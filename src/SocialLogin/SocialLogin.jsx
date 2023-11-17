import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const navigate = useNavigate();

    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                navigate('/');
            })
    }
    return (
        <div>
            <div className=" divider"></div>
            <button onClick={handleGoogleSignIn} className="btn flex flex-col mx-auto mb-5 -mt-50 justify-center ">
                Google <FaGoogle></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;