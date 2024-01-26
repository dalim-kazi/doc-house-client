import bg from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div className="mt-20" style={{backgroundImage:`url(${bg})`}}>
            <div className="md:w-1/2 mx-5 md:mx-auto py-10">
                <div className="text-center mb-10">
                <p className="text-primary font-bold text-md">Contact Us</p>
                <h1 className="text-3xl text-white">Stay connected with us</h1>
               </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Subject</span>
          </label>
          <input type="text" placeholder="Subject" className="input input-bordered" required />
            </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text text-white font-bold">Message</span>
          </label>
         <textarea type="text" placeholder="enter your message" className="input input-bordered" required/>
                </div>
                <button type='submit' className="btn btn-primary w-full mt-10 text-white text-lg">Submit</button>
           </div>
        </div>
    );
};

export default Contact;