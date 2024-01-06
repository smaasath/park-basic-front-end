import React from 'react'
import FaceBook from '../../../assests/pictures/facebook.png'
import Instagram from '../../../assests/pictures/insta.png'
import Twitter from '../../../assests/pictures/twitter.png'




const CommonSocialMedia = () => {
    return (
        <div className='footer-social-media-container d-flex justify-content-between'>
            <img className='' src={Twitter} style={{ width: "15%", }} />
            <img className='' src={Instagram} style={{ width: "15%", }} />
            <img className='' src={FaceBook} style={{ width: "15%", }} />
        </div>
    )
}

export default CommonSocialMedia
