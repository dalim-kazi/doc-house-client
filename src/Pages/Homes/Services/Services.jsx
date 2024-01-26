import service1 from '../../../assets/images/fluoride.png'
import service2 from '../../../assets/images/cavity.png'
import service3 from '../../../assets/images/whitening.png'
const Services = () => {
    const service = [
        {
            id: 1,
            title: "Fluoride Treatment",
            detail: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: service1
        },
        {
            id: 2,
            title: "Filling",
            detail: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: service2
        },
        {
            id: 3,
            title: "Teeth Whitening",
            detail: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: service3
        },
    ]

    return (
        <div className="mt-20">
            <div className="text-center">
                <p className="text-primary font-bold">OUR SERVICES</p>
                <p className="text-2xl">Services We Provide</p>
            </div>
            <div className='grid md:grid-cols-3 gap-5 mx-5 lg:mx-24 mt-20'>
                {
                    service?.map(item => <div key={item.id} className="card shadow-md rounded-lg border-t-2 border-primary">
                        <div className="card-body items-center text-center">
                            <img src={item.icon} className="card-title" />
                            <h1>{item.title}</h1>
                            <p>{item.detail}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;