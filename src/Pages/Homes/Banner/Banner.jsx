import chair from '../../../assets/images/chair.png'
import banner from '../../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className="hero mt-20" style={{backgroundImage:`url(${banner})` ,backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className="hero-content flex-col md:flex-row-reverse justify-between">
                <img src={chair} alt='' className='md:w-1/2 mb-10 md:mb-0' />
                <div className='w-full'>
                    <h1 className="text-4xl font-semibold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-10">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;