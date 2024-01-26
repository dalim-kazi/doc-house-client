import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDeleteAsync, UserGetAsync, UserUpdateAsync } from "../../../../Feature/Action/UserAction/UserAction";
import Spinner from "../../../../Component/Spinner/Spinner";
import Error from "../../../../Error/Error";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";
const ManageUser = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const { user: manageUser, isLoading, isError } = useSelector(state => state.saveUser)
useEffect(() => {
    const fetchData = async () => {
        try {
            await dispatch(UserGetAsync(user?.email));
        } catch (error) {
            console.error("Error fetching user or admin data:", error);
        }
    };

    fetchData();
}, [dispatch, user?.email]);
    
    const handleUserUpdate = async(user) => {
        try {
            const newUser = {
                _id:user._id,
                name:user.name, 
                uid: user.uid, 
                email:user.email,  
                photo: user.photo,
                role:"admin"
           }
           const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          });
      
          if (result.isConfirmed) {
            await dispatch(UserUpdateAsync(newUser));
              await dispatch(UserGetAsync(user?.email));
              Swal.fire({
                icon: "success",
                title: "successful",
                text: "Something went wrong!",
              });
          }
       } catch (error) {
        return <Error/>
       }
    }
    
    const handleUserDelete = async (item) => {
        const deleteUser = {
          deleteUserEmail: item?.email,
        };
      
        try {
          const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          });
      
          if (result.isConfirmed) {
            await dispatch(UserDeleteAsync(deleteUser));
              await dispatch(UserGetAsync(user?.email));
              Swal.fire({
                icon: "success",
                title: "successful delete",
                text: "Something went wrong!",
              });
          }
        }
        catch (error) {
            return <Error/>
        }
      };
      


    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <Error />
    }
    return (
        <div className="overflow-x-auto lg:mx-10 mt-10">
            <table className="table">
                <thead className="bg-blue-600 text-white p-2 text-center text-[1rem]">
                    <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Uid</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        manageUser?.map((item,index) => <tr key={item._id} className="bg-white text-black text-[1rem] text-center">
                            <td>{index+1}</td>
                            <td>
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={item.photo} />
                                    </div>
                                </div>
                            </td>
                            <td>
                               {item.name}
                            </td>
                            <td>{item.email}</td>
                            <td>{item.uid}</td>
                            <td className="flex justify-center items-center gap-5">
                                {
                                    item?.role ==="admin" ? <><p className="bg-blue-600 text-white px-10 py-2 rounded-lg cursor-pointer ">Admin</p></> : <>
                                    <button onClick={()=>handleUserUpdate(item)} className="bg-green-600 text-white p-2 rounded-md hover:bg-blue-600 hover:text-white"><FaUserSecret/></button>
                                    </>
                                }
                                <button onClick={()=>handleUserDelete(item)} className="bg-red-600 text-white p-2 rounded-md hover:bg-orange-600 hover:text-white"><RiDeleteBin5Line/></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;