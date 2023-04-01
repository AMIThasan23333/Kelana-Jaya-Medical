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

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

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