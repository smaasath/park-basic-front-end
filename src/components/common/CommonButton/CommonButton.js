import { useState } from 'react';
import '../../../App.css';
import './CommonButton.css'
import { useNavigate } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';
import { Oval } from 'react-loader-spinner';




function CommonButton({ ButtonText, onclick, ParkingSpaceButton, disabled, loading }) {


  return (
    <>
      <button className='btn' style={{ borderWidth: 0 }} onClick={onclick} disabled={disabled == true ? true : false}>
        <div
          className={`d-flex align-items-center justify-content-center ${!ParkingSpaceButton ? "common-button-container" : "common-button-parking-container"}`}
        >
          <div className=''>
            {loading == true ? (
              <Oval
                visible={true}
                height="25"
                width="25"
                color="#000"
                ariaLabel="tail-spin-loading"
                secondaryColor="#616A6B"
                radius="1"
                wrapperClass=""
              />
            ) : null}
          </div>
          <div className='ms-2'>{ButtonText}</div>

        </div>
      </button>
    </>
  );
}

export default CommonButton;
