import React, { useEffect, useState } from 'react'
import './SignIn.css'
import parkLogo from '../../../assests/pictures/park-basic-logo.png'
import CommonInputs from '../../../components/common/CommonInputs/CommonInputs.js';
import CommonButton from '../../../components/common/CommonButton/CommonButton.js';
import { Login } from '../../../redux/actions/UserActions.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CommonSignComponent from '../../../components/common/CommonSignComponent/CommonSignComponent.js';




function SignIn() {



    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({});
    const [loading, setloading] = useState();
    const [clicked, setclicked] = useState();

    const navigate = useNavigate();
    const token = Cookies.get('token')




    useEffect(() => {
        if (token) {
            dispatch(
                Login(null, (res) => {
                    loginCheck(res)
                })
            )
        }

    }, [token]);



    function loginCheck(res, cookieOptions) {


        if (res.status == 200) {
            console.warn("suc")
            console.warn(res.data)
            if (res.data.user.is_superuser == true) {
                toast.success("Logged in Successfully", {
                    autoClose: 1000
                });
                Cookies.set("token", res.data.token, cookieOptions);
                navigate('/admin')
            } else {
                Cookies.set("token", res.data.token, cookieOptions);
                navigate('/')
            }
        } else if (res.status == 401) {
            toast.error("Invalid Credentials", {
                autoClose: 1000
            });
            console.warn("error cre")
            console.warn(res.data)
        } else {
            toast.error("Some thing went worng! Try again!", {
                autoClose: 1000
            });
            console.warn("error")
            console.warn(res.data)
        }

        setloading(false);

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        setloading(true);
        event.preventDefault();
        console.log(inputs);
        const cookieOptions = {
            path: "/"
        };

        if (inputs.rememberMe) {
            cookieOptions.expires = 7;
        }
        dispatch(
            Login({
                username: inputs.username,
                password: inputs.password
            }, (res) => {
                loginCheck(res, cookieOptions)
            })
        )


    }

    return (
        <>
            <CommonSignComponent SignIn={true}>
                <form onSubmit={handleSubmit} className='pt-5 pb-5'>
                    <div className='ps-2 pe-2'>
                        <CommonInputs
                            Label={"User Name"}
                            PlaceHolder={"Enter your user name"}
                            onChange={handleChange}
                            Type={"text"}
                            Name={"username"}
                        />
                    </div>

                    <div className='ps-2 pe-2'>
                        <CommonInputs
                            Label={"Password"}
                            PlaceHolder={"Enter your Password"}
                            onChange={handleChange}
                            Type={"password"}
                            Name={"password"}
                        />
                    </div>

                    <div className="row ps-2 pe-2">
                        <div className='col-lg-4'></div>
                        <div className='col-lg-8 mt-2 ps-4'>
                            <input className="form-check-input" type="checkbox" name='rememberMe' onChange={handleChange} />
                            <label className='text-white ps-4'>Remember Me</label>
                        </div>

                    </div>

                    <div className='mt-4 d-flex justify-content-end align-items-center pe-4'>
                        <CommonButton loading={loading} ButtonText={"Sign In"} />
                    </div>

                </form>
            </CommonSignComponent>
            <ToastContainer autoClose={8000} />


        </>
    )
}

export default SignIn
