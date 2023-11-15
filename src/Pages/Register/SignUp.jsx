import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";




const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content lg:flex-row  flex-col p-20">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name"
                                    name='name'
                                    {...register("name", { required: true })}
                                    className="input input-bordered"
                                />

                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name='email'
                                    {...register("email", { required: true })}
                                    className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name='password'
                                    className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=^[ -~]{6,64}$)(?=.*([a-z][A-Z]))(?=.*[0-9])(.*[ -/|:-@|\[-`|{-~]).+$/

                                    })}
                                />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password muss be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password muss be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password muss have one Uppercase, one Lowercase, One number and one special character </span>}

                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign In</button>
                            </div>
                            <p className="text-xl">Already have an account ! <Link className="font-bold text-blue-600" to={'/login'}> Log In </Link></p>
                        </form>


                    </div>
                </div>
            </div></>
    );
};

export default SignUp;