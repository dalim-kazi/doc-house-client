import treatment from '../../../assets/images/treatment.png'
const TermsDentals = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10">
            <div className="hero-content flex-col md:flex-row md:gap-5">
                <div className='md:w-1/2'>
                    <img src={treatment} className="md:max-w-sm rounded-lg w-full" />
                </div>
                <div className='md:w-1/2'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white px-10">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default TermsDentals;