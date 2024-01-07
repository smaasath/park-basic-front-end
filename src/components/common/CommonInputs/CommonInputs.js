import React from 'react'
import './CommonInputs.css'

export default function CommonInputs({ onChange, Lable, Name, PlaceHolder, Disable, Type }) {
    return (
        <div className='row p-2 mt-1 justify-content-center align-items-center'>
            <div className='col-lg-4 text-white h7 mt-2'>
                {Lable}
            </div>

            <div className='col-lg-8 mt-2'>
                <input
                    type={Type}
                    name={Name}
                    className='w-100 common-input-container ps-3 pe-3 p-2 form-control'
                    onChange={onChange}
                    placeholder={PlaceHolder}
                    disabled={Disable ? true : false}
                    required
                />
            </div>
        </div>
    )
}


