import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';
import parklogo from '../../../assests/pictures/park-basic-logo.png'
import './CommonLoading.css'

const CommonLoading = ({ onlySpin }) => {
    return (
        <div className={onlySpin ? 'd-flex text-center justify-content-center align-items-center' : 'd-flex text-center justify-content-center align-items-center loader-spinner'}>
            <div className='row  justify-content-center align-items-center'>
                {onlySpin ? null : (<img src={parklogo} style={{ width: "45%" }} />)}

                <InfinitySpin
                    visible={true}
                    width="200"
                    color="#FB8800"

                />
            </div>



        </div>
    )
}

export default CommonLoading
