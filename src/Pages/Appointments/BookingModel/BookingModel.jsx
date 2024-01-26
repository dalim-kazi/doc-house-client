import  { useCallback, useEffect } from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { SingleUserBooking, UserBookingPost } from '../../../Feature/Action/BookingAction/BookingAction';
import Spinner from '../../../Component/Spinner/Spinner';
import { toast } from 'react-toastify';
import Error from '../../../Error/Error';

const BookingModel = ({ treatment, selectedDay, setTreatment ,onBookingSuccess}) => {
  const { name,price, slots } = treatment;
  const { user } = useSelector((state) => state.user);
  const { booking, isLoading, isError } = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const date = format(selectedDay, 'PPP');

  useEffect(() => {
    const fetchUserBooking = async () => {
   try {
   await dispatch(SingleUserBooking(user?.email));
   } catch (error) {
    return <Error/>
   }
    }
    fetchUserBooking()
  }, [dispatch, user?.email]);

  const handleBooking =useCallback( async (e) => {
    e.preventDefault();
    const form = e.target;
    const selectedSlots = form.slots.value;
    const patientName = form.name.value;
    const phone = form.phone.value;

    const bookingDetails = {
      appointmentDate: date,
      appointmentTime: selectedSlots,
      treatmentName: name,
      patientName,
      phone,
      price,
      email: user.email,
      paymentStatus:"pending"
    };

    try {
        const hasExistingBooking = booking?.some(
          (book) => book.email === user.email && book.appointmentDate === date && book.treatmentName === name
        );
  
        if (hasExistingBooking) {
            form.reset()
          toast.error('You already have a booking for this treatment.');
        } else {
         await dispatch(UserBookingPost(bookingDetails));
         await dispatch(SingleUserBooking(user?.email))
          onBookingSuccess();
            setTreatment(null);
            form.reset()
        }
      } catch (error) {
        console.error('Booking failed:', error.message);
        toast.error('Booking failed. Please try again.');
      }
  },
  [dispatch,user?.email,booking,date,name ,price,onBookingSuccess,setTreatment]
  )

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
     return <Error/>
  }

  return (
    <>
      <input type="checkbox" id="booking_model" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form method="dialog">
            <label htmlFor="booking_model" className="btn btn-sm btn-circle btn-ghost bg-secondary absolute right-2 top-2 hover:bg-primary text-white">
              ✕
            </label>
          </form>
          <h3 className="font-bold text-lg text-center">{name}</h3>
          <div>
            <form onSubmit={handleBooking}>
              <input name="date" type="text" value={date} disabled className="input input-bordered w-full mt-5" required />
              <select name="slots" className="select select-bordered w-full mt-5">
                {slots?.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input required name="name" value={user?.displayName} readOnly type="text" placeholder="Full Name" className="input input-bordered w-full mt-5" />
              <input required name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full mt-5" />
              <button type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-10 text-[1rem] mt-5 w-full">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

BookingModel.propTypes = {
  treatment: PropTypes.shape({
    name: PropTypes.string,
    price:PropTypes.number,
    slots: PropTypes.arrayOf(PropTypes.string),
  }),
  selectedDay: PropTypes.any,
    setTreatment: PropTypes.func.isRequired,
    onBookingSuccess: PropTypes.func.isRequired,
};

export default BookingModel;