import AppointmentToday from "../AppointmentToday/AppointmentToday";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import InfoCard from "../InfoCard/InfoCard";
import Services from "../Services/Services";
import TermsDentals from "../TermsDentals/TermsDentals";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
            <TermsDentals />
            <AppointmentToday /> 
            <Testimonial />
            <Contact/>
        </div>
    );
};

export default Home;