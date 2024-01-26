import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { UpdateBooking } from "../../Feature/Action/BookingAction/BookingAction";
import PropTypes from 'prop-types';

const UpdateModel = ({ fetchUserBooking, bookingItem, onClose }) => {
  const dispatch = useDispatch();

  const handleBookingUpdate = useCallback(async (e) => {
    e.preventDefault();
    const form = e.target;

    const newBooking = {
      _id: bookingItem?._id,
      appointmentDate: form.appointmentDate.value,
      appointmentTime: form.appointmentTime.value,
      treatmentName: form.treatmentName.value,
      patientName: form.patientName.value,
      phone: form.phone.value,
      email: bookingItem?.email
    };

    await dispatch(UpdateBooking(newBooking));
    fetchUserBooking();
    onClose()
  }, [dispatch, fetchUserBooking, bookingItem?.email, bookingItem?._id, onClose]);

  return (
    <div>
      <input type="checkbox" id="bookingUpdate_model" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form method="dialog">
            <label htmlFor="bookingUpdate_model" className="btn btn-sm btn-circle btn-ghost bg-secondary absolute right-2 top-2 hover:bg-primary text-white">
              ✕
            </label>
          </form>
          <h3 className="font-bold text-lg text-center">{bookingItem?.treatmentName}</h3>
          <div>
            <form onSubmit={handleBookingUpdate}>
              <input name="treatmentName" disabled type="text" defaultValue={bookingItem?.treatmentName} className="input input-bordered w-full mt-5" required />
              <input name="appointmentDate" disabled type="text" defaultValue={bookingItem?.appointmentDate} className="input input-bordered w-full mt-5" required />
              <input name="appointmentTime" disabled type="text" defaultValue={bookingItem?.appointmentTime} className="input input-bordered w-full mt-5" required />
              <input required name="patientName" defaultValue={bookingItem?.patientName} type="text" placeholder="Full Name" className="input input-bordered w-full mt-5" />
              <input required name="phone" defaultValue={bookingItem?.phone} type="text" placeholder="Phone Number" className="input input-bordered w-full mt-5" />
              <button type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-10 text-[1rem] mt-5 w-full">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

UpdateModel.propTypes = {
  fetchUserBooking: PropTypes.func.isRequired,
  bookingItem: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateModel;