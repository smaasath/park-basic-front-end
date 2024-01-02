import { useState } from 'react';
import '../../../App.css';
import './CommonButton.css'
import { useNavigate } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';



function CommonButton({ ButtonText, onclick, ParkingSpaceButton }) {


  return (
    <>
      <button className='btn' style={{borderWidth:0}} onclick={onclick}>
        <div
          className={`row align-items-center justify-content-center ${!ParkingSpaceButton ? "common-button-container" : "common-button-parking-container"}`}
        >
          {ButtonText}
        </div>
      </button>
    </>
  );
}

export default CommonButton;
