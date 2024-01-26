import { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";

const Appointment = () => {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState(today);
    return (
        <div className="mt-20 mb-20">
            <AppointmentBanner selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            <AvailableAppointment  selectedDay={selectedDay}/>
        </div>
    );
};

export default Appointment;