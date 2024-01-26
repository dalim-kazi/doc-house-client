import { useSelector } from "react-redux";

const UserHome = () => {
    const user = useSelector(state => state.user.user);
    console.log(user)
    return (
        <div className="w-[30%] mx-auto mt-20 bg-slate-100 p-10 rounded-lg">
            <img className="w-48 rounded-full mx-auto mt-10" src={user?.photoURL} alt="" />
            <p className="text-2xl font-bold mt-5 text-center">{user?.displayName}</p>
            <p className="text-lg font-semibold mt-2 text-center">{user?.email}</p>
        </div>
    );
};

export default UserHome;