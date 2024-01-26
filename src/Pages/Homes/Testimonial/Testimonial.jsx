import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
const Testimonial = () => {
    const review = [
        {
            id: 1,
            name: "Winson Herry",
            image: people1,
            country: "California",
            title: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",

        },
        {
            id: 2,
            name: "Winson Herry",
            image: people2,
            country: "California",
            title: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",

        },
        {
            id: 3,
            name: "Winson Herry",
            image: people3,
            country: "California",
            title: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",

        }
    ]
    return (
        <div className='mt-20'>
            <div className='flex justify-between items-center mx-10'>
                <div>
                    <p className='text-primary font-bold'>Testimonial</p>
                    <p className='text-2xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='w-52' src={quote} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-5 mx-5 lg:mx-20 mt-20'>
                {
                    review?.map(item => <div key={item.id} className="card bg-base-100 shadow-md border-t-2 border-primary">
                        <div className="card-body">
                            <p>{item.title}</p>
                            <div className='flex items-center gap-5 mt-5'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={item.image} alt=''/>
                                    </div>
                                </div>
                                <div>
                                    <h1>{item.name}</h1>
                                    <p>{item.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;