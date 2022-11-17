import React from 'react';

const BookingModal = ({ treatment }) => {
  const { name } = treatment;
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

          <p>{name}</p>
        </div>
      </div>

    </div>
  );
};

export default BookingModal;