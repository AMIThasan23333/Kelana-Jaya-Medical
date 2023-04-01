import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {


    const [appointmentOptions, setAppointmentOptions ] = useState([])



    useEffect(() => {

        fetch('services.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    })

    return (
        <div>
             <p className='text-center font-bold  text-primary'> AvailableAppoinment on   {format(selectedDate, 'PP')} </p>

             <div>

                {
                    appointmentOptions.map(options => <AppointmentOption
                    options={options}
                    ></AppointmentOption>)
                }
             </div>
        </div>
    );
};

export default AvailableAppointment;