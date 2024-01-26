import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBooking, SingleUserBooking } from "../../../../Feature/Action/BookingAction/BookingAction";
import Spinner from "../../../../Component/Spinner/Spinner";
import { RiDeleteBin5Line } from "react-icons/ri";
import Error from "../../../../Error/Error";
import { FaRegEdit } from "react-icons/fa";
import UpdateModel from "../../../../Component/UpdateModel/UpdateModel";
import Swal from "sweetalert2";
import axios from "axios";
 

const UserBooking = () => {
  const dispatch = useDispatch();
  const { booking, isLoading, isError } = useSelector((state) => state?.booking);
  const user = useSelector((state) => state.user.user);

  const [selectedBooking, setSelectedBooking] = useState(null);

  const fetchUserBooking = useCallback(async () => {
    try {
      user && (await dispatch(SingleUserBooking(user?.email)));
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  }, [dispatch, user]);

  useEffect(() => {
    fetchUserBooking();
  }, [fetchUserBooking]);

  const handleBookingDelete = useCallback(
    async (id) => {
          try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                  if (result.isConfirmed) {
                     dispatch(DeleteBooking(id));
                     fetchUserBooking();
                }
              });
       
      } catch (error) {
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    },
    [dispatch, fetchUserBooking]
  );

  const handlePayment = (bookingInformation) => {
    console.log(bookingInformation)
    axios.post("https://doc-house-server-iota.vercel.app/payment", bookingInformation)
      .then(data => {
        console.log(data)
        window.location.replace(data.data.url)
        fetchUserBooking()
    })
    
   }

  const openUpdateModal = (bookingItem) => {
    setSelectedBooking(bookingItem);
  };

  const closeUpdateModal = () => {
    setSelectedBooking(null);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="overflow-x-auto lg:mx-10 mt-10">
      <table className="table">
        <thead className="text-center text-[1rem] bg-blue-600 text-white py-2">
          <tr>
            <th>NO</th>
            <th>Photo</th>
            <th>Patient Name</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Treatment Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {booking?.map((item, index) => (
            <tr key={item._id} className="text-center text-[1.1rem] bg-white">
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="User Avatar" />
                  </div>
                </div>
              </td>
              <td>
                {item.patientName}
                <br />
                <span>{item.phone}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{item.email}</span>
              </td>
              <td>{item.appointmentDate}</td>
              <td>{item.appointmentTime}</td>
              <td>{item.treatmentName}</td>
              <td className="flex items-center justify-center gap-5">
                <label
                  className="btn btn-sm btn-primary bg-gradient-to-r from-primary to-secondary text-white text-[1rem]"
                  htmlFor="bookingUpdate_model"
                  onClick={() => openUpdateModal(item)}
                >
                  <FaRegEdit className="text-xl" />
                </label>
                <button onClick={() => handleBookingDelete(item._id)} className="bg-red-600 text-white p-2 rounded-md hover:bg-orange-600 hover:text-white">
                  <RiDeleteBin5Line />
                </button>
                {
                  item?.paymentStatus === "Successful" ? <> <button  className="bg-green-600 text-white rounded-md hover:bg-blue-600 hover:text-white p-2 w-32">Pay Successful</button></> : <>
                   <button onClick={()=>handlePayment(item)} className="bg-orange-600 text-white rounded-md hover:bg-yellow-600 hover:text-white p-2 w-32">Pay</button>
                  </> 
               }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBooking && <UpdateModel bookingItem={selectedBooking} onClose={closeUpdateModal}  fetchUserBooking={fetchUserBooking}/>}
    </div>
  );
};

export default UserBooking;