import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, setTreatment,selectedDate}) => {


  const {name , slots } = treatment;

   const date = format(selectedDate, 'PP')



   const handleSubmit = (event ) => {

     event.preventDefault();

     const form = event.target;

     const slot = form.slot.value;

     const name = form.name.value;

     const phone = form.Phone.value;


     const email = form.email.value;


           const booking = {


            appointmentDate :date,

            treatment : name,

            patient: name,

            slot,
            email,
            phone
           }

           console.log(booking)
           setTreatment(null)

   }


    return (


    /* The button to open modal */
/*  */


<div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
   

   <form  onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>

   <input type="text"   disabled value={date} placeholder="Type here" className="input input-primary w-full input-bordered " />

            <select name='slot' className="select select-info ">   
            {
              slots.map(slot => <option value={slot}>{slot}</option>)
            }

            </select>

   <input type="text" name='name' placeholder="name" className="input input-bordered input-primary w-full " />

   <input type="text" name='Phone' placeholder="Phone number " className="input input-bordered input-primary w-full " />

   <input type="text" name='email' placeholder="Email" className="input input-bordered input-primary w-full " />

<br/>

   <input  className='btn  btn-accent w-full ' type="submit" value="Submit" />

   </form>



  </div>
</div>
</div>

    );
};

export default BookingModal;