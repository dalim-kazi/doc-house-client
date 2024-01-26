import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AvailableAppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
    const user = useSelector(state => state.user.user);
    const renderSlotInformation = () => {
        if (slots.length > 0) {
            return slots[0];
        } else {
            return "Try another day";
        }
    };

    const handleClick = () => {
      toast.error("please login")
  }

    return (
        <div className="card shadow-md border-t-2 border-secondary w-full">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary text-center font-bold mb-3">{name}</h2>
                <p>{renderSlotInformation()}</p>
                <p>
                    <span className='text-xl font-semibold text-secondary'>{slots.length}</span> {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
                </p>
                <p className=' font-semibold'>Price : {price}</p>
                <div className="card-actions justify-center mt-3">
                    {
                        user? <label onClick={() => setTreatment(appointmentOption)} disabled={slots.length === 0} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-10 text-[1rem]" htmlFor="booking_model">Book Appointment</label>:<><button onClick={handleClick} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-10 text-[1rem]">Book Appointment</button></>
                   }
                </div>
            </div>
        </div>
    );
};

AvailableAppointmentOptions.propTypes = {
    appointmentOption: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        slots: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    setTreatment: PropTypes.func.isRequired
};

export default AvailableAppointmentOptions;