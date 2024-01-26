import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import AvailableAppointmentOptions from './AvailableAppointmentOptions';
import BookingModel from '../BookingModel/BookingModel';
import { useDispatch, useSelector } from 'react-redux';
import { allAppointmentService } from '../../../Feature/Action/AppointmentServiceAction/AppointmentServiceAction';
import Spinner from '../../../Component/Spinner/Spinner';
const AvailableAppointment = ({ selectedDay }) => {
    const dispatch = useDispatch()
    const [treatment, setTreatment] = useState(null)
    const { service, isLoading, isError } = useSelector(state => state.service)
    const date = format(selectedDay, 'PPP')
    useEffect(() => {
        try {
            dispatch(allAppointmentService(date))
        } catch (error) {
             console.log(error)
        }
    }, [dispatch, date])

    const handleBookingSuccess = async () => {
        try {
            await dispatch(allAppointmentService(date));
        } catch (error) {
            console.error('Data refresh after booking failed:', error);
             
        }
    };

    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
         console.log(isError)
    }
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <p className='text-primary text-2xl font-semibold mb-5'>Available Services on  {format(selectedDay, 'PPP')}.</p>
                <p className='text-lg'>Please select a service.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5  mt-10 md:mx-20'>
                {
                    service?.map(options => <AvailableAppointmentOptions key={options._id} appointmentOption={options} setTreatment={setTreatment} />)
                }
            </div>
            {treatment && <BookingModel treatment={treatment} selectedDay={selectedDay} setTreatment={setTreatment} onBookingSuccess={handleBookingSuccess} />}
        </div>
    );
};


AvailableAppointment.propTypes = {
    selectedDay: PropTypes.any,
    setSelectedDay: PropTypes.any,
};
export default AvailableAppointment;