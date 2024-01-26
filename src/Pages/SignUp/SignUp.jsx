import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUser, updateProfileUser } from "../../Feature/Action/AuthAction/AuthAction";
import { UserPostAsync } from "../../Feature/Action/UserAction/UserAction";

const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location =useLocation()
    let from = location.state?.from?.pathname || "/";
    const imgApi = import.meta.env.VITE_APP_IMGBB
    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photo = form.file.files[0];
            const formDate = new FormData();
            formDate.append('image', photo);

            const url = `https://api.imgbb.com/1/upload?key=${imgApi}`;
            const response = await fetch(url, {
                method: "POST",
                body: formDate,
            });

            const data = await response.json();
            const photoUrl = data.data.url;

            if (photoUrl) {
                const createUserResult = await dispatch(createUser({ email, password }));
                if (createUserResult.payload.uid) {
                    const updateUser = await dispatch(updateProfileUser({ name, photoUrl }));
                    
                    if (updateUser.payload.uid) {
                        console.log(updateUser.payload.uid)
                        const saveUser = {
                            name: updateUser.payload.displayName,
                            uid: updateUser.payload.uid,
                            email: updateUser.payload.email,
                            photo:updateUser.payload.photoURL
                        }
                        console.log(saveUser)
                        dispatch(UserPostAsync(saveUser))
                        navigate(from, { replace: true })
                    }
                  
                }
            }

        } catch (error) {
           console.log(error)
        }
    };
    return (
        <div className="card shrink-0 mx-4 md:w-96 mt-20 mb-20 shadow-md md:shadow-2xl md:mx-auto border-t-2 border-primary">
            <p className="text-center text-xl font-semibold text-secondary mt-5">Doc House SignUp</p>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input name="file" type="file" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary text-[1.2rem]">Login</button>
                </div>
            </form>
            <p className="text-center -mt-2 mb-2">New to Doctors Portal? <Link to={"/login"} className="text-primary underline">Login</Link></p>
        </div>
    );
};

export default SignUp;