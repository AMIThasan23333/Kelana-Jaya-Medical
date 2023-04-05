import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {


    const {user} = useContext(AuthContext)

    const url =`http://localhost:5000/bookings?email=${user?.email}`


    const { data : bookings = []} = useQuery({
        queryKey : ['bookings', user?.email],

        queryFn : async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;

        }
    })


    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointment </h3>
            <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Treatment</th>
                    <th>DATE</th>
                    <th>Time</th>

                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                
                {

                    bookings.map((booking,i) => 
                        <tr>
                        <th>{i}</th>
                        <td>{booking.patient}</td>
                        <td>{booking.treatment}</td>
                        <td>{booking.appointmentDate}</td>
                        <td>{booking.slot}</td>

                        
                    </tr>
                        
                        )
                }
                {/* row 2 */}

                {/* <tr className="hover">
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr> */}

                {/* <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                </tr> */}
                </tbody>
            </table>
</div>
        </div>
    );
};

export default MyAppointment;