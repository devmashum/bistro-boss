import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {

    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                // take the data from the google signIn user
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
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