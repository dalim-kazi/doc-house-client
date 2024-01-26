import { useEffect, useState } from "react";
import axiosSecure from "../../../../Component/UseAxiosSecure/UseAxiosSecure";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { AllBookingGet } from "../../../../Feature/Action/BookingAction/BookingAction";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const AdminHome = () => {
    const { user } = useSelector(state => state.user)
    const { booking } = useSelector(state => state.booking)
    const dispatch = useDispatch()
    const [TotalCount, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`https://doc-house-server-iota.vercel.app/payment/adminHome?email=${user?.email}`);
                setData(response.data);
                await dispatch(AllBookingGet(user?.email))
            } catch (error) {
                console.log(error)
            }
        };

        if (user?.email) {
            fetchData();
        }
        return () => {
        };
    }, [user?.email, dispatch]);


    const allBooking = booking?.filter(item => item.paymentStatus === "Successful")
    const TeethOrthodontics = allBooking?.filter(item => item.treatmentName === "Teeth Orthodontics")
    const TeethOrthodonticPrice =TeethOrthodontics?.reduce((sum,currentValue)=>sum +currentValue.price,0)
    const CosmeticDentistry = allBooking?.filter(item => item.treatmentName === "Cosmetic Dentistry")
    const CosmeticDentistryPrice =CosmeticDentistry?.reduce((sum,currentValue)=>sum +currentValue.price,0)
    const TeethCleaning = allBooking?.filter(item => item.treatmentName === "Teeth Cleaning")
    const TeethCleaningPrice =TeethCleaning?.reduce((sum,currentValue)=>sum +currentValue.price,0)
    const CavityProtection = allBooking?.filter(item => item.treatmentName === "Cavity Protection")
    const CavityProtectionPrice =CavityProtection?.reduce((sum,currentValue)=>sum +currentValue.price,0)
    const PediatricDental = allBooking?.filter(item => item.treatmentName === "Pediatric Dental")
    const PediatricDentalPrice =PediatricDental?.reduce((sum,currentValue)=>sum +currentValue.price,0)
    const OralSurgery = allBooking?.filter(item => item.treatmentName === "Oral Surgery")
    const OralSurgeryPrice =OralSurgery?.reduce((sum,currentValue)=>sum +currentValue.price,0)

    const data = [
        {
            name: "Teeth Orthodontics",
            price:TeethOrthodonticPrice,
            count:TeethOrthodontics.length
        },
        {
            name: "Cosmetic Dentistry",
            price:CosmeticDentistryPrice,
            count:CosmeticDentistry.length
        },
        {
            name: "Teeth Cleaning" ,
            price:TeethCleaningPrice,
            count:TeethCleaning.length
        },
        {
            name: "Cavity Protection",
            price: CavityProtectionPrice,
            count:CavityProtection.length
        },
        {
            name: "Pediatric Dental",
            price: PediatricDentalPrice,
            count:PediatricDental.length
        },
        {
            name: "Oral Surgery",
            price: OralSurgeryPrice,
            count:OralSurgery.length
        }
    ];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    TriangleBar.propTypes = {
        fill: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    };
    return (
        <div className="overflow-scroll lg:overflow-hidden mb-10">
            <div className="lg:w-3/4 grid grid-cols-3 gap-3 mx-2 lg:mx-auto mt-10">
                <div className="bg-gradient-to-r from-blue-500 via-blue-800 to-teal-500 px-5 lg:px-10 py-5 md:py-10 rounded-lg text-center">
                    <p className="md:text-2xl font-bold text-white uppercase">Total Service</p>
                    <p className="text-white font-bold md:text-3xl lg:mt-5">{TotalCount?.totalAppointmentService}</p>
                </div>
                <div className="bg-gradient-to-r from-yellow-500 to-red-500 px-5 lg:px-10 py-5 md:py-10 rounded-lg text-center">
                    <p className="md:text-2xl font-bold text-white uppercase">Total Booking</p>
                    <p className="text-white font-bold md:text-3xl lg:mt-5">{TotalCount?.totalBooking}</p>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-yellow-500 px-5 lg:px-10 py-5 md:py-10 rounded-lg text-center">
                    <p className="md:text-2xl font-bold text-white uppercase">Total User</p>
                    <p className="text-white font-bold md:text-3xl lg:mt-5">{TotalCount?.totalUser}</p>
                </div>
            </div>
            <div>
                <div className="mt-20 lg:w-3/4 mx-3 md:mx-auto">
                    <BarChart
                        width={1000}
                        height={500}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;