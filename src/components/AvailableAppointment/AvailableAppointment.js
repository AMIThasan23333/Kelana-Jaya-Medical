import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
             <p className='text-center font-bold  text-primary'> AvailableAppoinment on   {format(selectedDate, 'PP')} </p>
        </div>
    );
};

export default AvailableAppointment;