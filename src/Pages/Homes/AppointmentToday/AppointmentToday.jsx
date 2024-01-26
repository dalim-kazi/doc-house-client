import doctor from '../../../assets/images/doctor-small.png'
import bg from '../../../assets/images/appointment.png'
const AppointmentToday = () => {
    return (
        <div className="hero bg-base-200 mb-20 mt-32" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col md:flex-row">
                <div className='md:w-1/2 hidden md:block'>
                    <img src={doctor} className="lg:-mt-24 lg:-mb-4" />
                </div>
                <div className='md:w-1/2'>
                    <p className='text-primary mt-10 md:mt-0 mb-5'>Appointment</p>
                    <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white px-10">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentToday;