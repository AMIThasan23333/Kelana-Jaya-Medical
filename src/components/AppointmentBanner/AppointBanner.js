import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';


const AppointBanner = () => {


    const [selectedDate, setSelectedDate] = useState(new Date ())



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div>
  
                 <DayPicker
                 
                 mode='single'
                 selected={selectedDate}
                 onSelect={setSelectedDate}
                 
                 ></DayPicker>
          </div>
        </div>
      </div>
    );
};

export default AppointBanner;