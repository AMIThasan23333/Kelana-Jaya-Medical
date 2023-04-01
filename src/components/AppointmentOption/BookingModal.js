import React from 'react';

const BookingModal = ({treatment}) => {


  const {name } = treatment;



    return (


    /* The button to open modal */
/*  */


<div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
   

   <form>

   <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

   <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

   <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

   <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

   <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

   <input type="submit" value="" />
   </form>



  </div>
</div>
</div>

    );
};

export default BookingModal;