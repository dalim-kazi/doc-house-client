import { Link } from "react-router-dom";

 const PaymentFailed = () => {
    return (
        <div className="text-center mt-28">
            <h1 className=" text-red-600 font-semibold text-lg ">Payment Failed please try again</h1> 
            <Link to={"/dashboard/userBooking"}><button className="bg-green-600 text-white px-10 py-2 rounded-lg font-semibold text-lg mt-10">Try Again</button></Link>
        </div>
    );
 };
 
 export default PaymentFailed;