import React from 'react'
import './CommonInputs.css'

export default function CommonInputs({ value, light, onChange, Label, Name, PlaceHolder, Disable, Type, error, phoneNumber }) {
    return (
        <>
            <div className='row p-2 mt-1 justify-content-center align-items-center'>
                <div className={light ? 'col-lg-4 text-dark h7 mt-2' : 'col-lg-4 text-white h7 mt-2'}>
                    {Label}
                </div>

                <div className='col-lg-8 mt-2'>
                    <div className='d-flex'>
                        {phoneNumber ?
                            (
                                <input
                                    value={"+94"}
                                    disabled
                                    style={{ width: 40, marginRight: 10 }}
                                />
                            )
                            :
                            null
                        }

                        <input
                            type={Type}
                            name={Name}
                            className='w-100 common-input-container ps-3 pe-3 p-2 form-control'
                            onChange={onChange}
                            placeholder={PlaceHolder}
                            disabled={Disable ? true : false}
                            value={value}
                            required
                        />
                    </div>

                    <div className='text-danger'>{error}</div>
                </div>
            </div>

        </>
    )
}


