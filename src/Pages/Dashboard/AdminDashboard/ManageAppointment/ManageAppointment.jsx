import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllBookingGet, DeleteBooking } from "../../../../Feature/Action/BookingAction/BookingAction";
import Spinner from "../../../../Component/Spinner/Spinner";
import Error from "../../../../Error/Error";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
const ManageAppointment = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const { booking, isLoading, isError } = useSelector(state => state.booking)
    useEffect(() => {
        try {
            dispatch(AllBookingGet(user?.email))
        } catch (error) {
            throw new Error(error.message)
        }
    }, [dispatch, user?.email])


    const handleDeleteAppointment = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(DeleteBooking(id))
              dispatch(AllBookingGet(user?.email))
            }
          });
     
  }



    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
        return <Error />
    }
    return (
        <div className="overflow-x-auto lg:mx-10 mt-10">
            <table className="table ">
                {/* head */}
                <thead className="bg-blue-600 text-white text-center text-[1rem]">
                    <tr>
                        <th>No</th>
                        <th>Patient Name</th>
                        <th>Treatment Name</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booking?.map((item, index) => <tr key={item._id} className="bg-white text-black text-center text-[1rem]">
                            <td>{index + 1}</td>
                            <td>
                                {item.patientName}
                                <br />
                                <span>{item.phone}</span>
                                <br />
                                <span className="badge badge-ghost badge-sm">{item.email}</span>
                            </td>
                            <td>{item.treatmentName}</td>
                            <td>{item.appointmentDate
                            }</td>
                            <td>{item.appointmentTime}</td>
                            <td className="flex justify-center items-center gap-5">
                                {
                                    item?.paymentStatus === "Successful" ? <><button className="bg-green-600 rounded-md p-2 text-white hover:bg-blue-600 hover:text-white w-32">Pay Successful</button></> : <>
                                    <button className="bg-orange-600 rounded-md p-2 text-white hover:bg-yellow-600 hover:text-white w-32">Pending</button>
                                    </>
                                }
                                <button onClick={()=>handleDeleteAppointment(item._id)} className="bg-red-600 text-white rounded-md p-2 hover:bg-orange-600 hover:text-white"><RiDeleteBin5Line/></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAppointment;