import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { signInUser } from "../../Feature/Action/AuthAction/AuthAction";

const Login = () => { 
  const dispatch =useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const handleLogin = async(e) => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value
        try {
            const result = await dispatch(signInUser({ email, password }))
             if (result.payload.uid) {
                navigate(from, { replace: true });
             }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    return (
        <div className="card mx-4  md:w-96 mt-20 shadow-md md:shadow-2xl md:mx-auto border-t-2 border-primary">
            <p className="text-center text-xl font-semibold text-secondary mt-5">Doc House SignIn</p>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary text-[1.2rem]">Login</button>
                </div>
            </form>
            <p className="text-center -mt-2">New to Doctors Portal? <Link to={"/signUp"} className="text-primary">Create new account</Link></p>
            {/* <div className="divider divider-primary">OR</div> */}
            <div className="flex  justify-center  gap-3  mb-2 mt-2 w-full">
                <FcGoogle className="text-xl cursor-pointer" />
                <FaSquareFacebook className="text-xl text-blue-600 cursor-pointer"/>
            </div>
        </div>
    );
};

export default Login;