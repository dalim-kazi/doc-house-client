import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../Feature/Action/AuthAction/AuthAction";
import profile from '../../assets/images/profile.png'
import { toast } from "react-toastify";
const Profile = () => {
const dispatch=useDispatch()
    const user = useSelector(state => state.user.user)
    const handleLogout = async() => {
       try {
           if (user) {
            await dispatch(logOutUser())
            toast.success("successful")
           }
       } catch (error) {
        console.log(error)
       }
    }
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {
                        user?.photoURL? <img src={user?.photoURL} />:<><img src={profile} alt="" /></>
                    }
                   
                </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black text-white rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge text-black">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>
    );
};

export default Profile;