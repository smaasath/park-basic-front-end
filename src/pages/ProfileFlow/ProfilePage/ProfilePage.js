import React from 'react'
import CommonButton from '../../../components/common/CommonButton/CommonButton.js'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'




const ProfilePage = () => {

    const navigate = useNavigate();

    function logout() {
        Cookies.remove('token', { path: '/' })
        navigate('/')
    }
    return (
        <div>
            <CommonButton
                onclick={logout}
                ButtonText={"Log out"}
            />
        </div>
    )
}

export default ProfilePage
