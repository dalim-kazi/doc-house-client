import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const InfoCard = () => {
    const info = [
        {
            id: 1,
            title: "Opening Hours",
            details: "Opening 9:00 am to 5:00 pm",
            icon: clock
        },
        {
            id: 2,
            title: "Visit our location",
            details: "Brooklyn, NY 10036, United States",
            icon: location
        },
        {
            id: 3,
            title: "Contact us now",
            details: "+080 1755876658",
            icon: phone
        },
    ]

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 mx-5 lg:mx-20'>
            {
                info?.map(item => <div key={item.id} className="card bg-neutral text-neutral-content">
                    <div className="card-body  bg-gradient-to-r from-primary to-secondary text-white rounded-lg">
                        <div className='flex items-center gap-5'>
                            <div>
                                <img src={item.icon} alt="" />
                            </div>
                            <div>
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.details}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default InfoCard;