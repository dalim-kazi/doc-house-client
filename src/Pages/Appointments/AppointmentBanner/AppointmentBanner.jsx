import banner from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import PropTypes from 'prop-types';

const AppointmentBanner = ({selectedDay,setSelectedDay}) => {
    
    return (
        <div className="hero mt-20 mb-20" style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
            <div className="hero-content flex-col lg:flex-row-reverse md:justify-between">
                <img className='md:w-1/2' src={banner} alt='banner' />
                <div className=''>
                    <DayPicker
                        mode="single"
                        required
                        selected={selectedDay}
                        onSelect={setSelectedDay}
                    />
                </div>
            </div>
        </div>
    );
};

AppointmentBanner.propTypes = {
  selectedDay: PropTypes.any,  
  setSelectedDay: PropTypes.func,  
};
export default AppointmentBanner;