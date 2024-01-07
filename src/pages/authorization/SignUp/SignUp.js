import React, { useEffect, useState } from 'react'
import CommonSignComponent from '../../../components/common/CommonSignComponent/CommonSignComponent'
import CommonInputs from '../../../components/common/CommonInputs/CommonInputs'
import CommonButton from '../../../components/common/CommonButton/CommonButton'
import { singnUpInputDetails } from '../../../data/signUpInputFields'
import { userRegister } from '../../../redux/actions/UserActions'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';








const SignUp = () => {

    const [inputs, setInputs] = useState({});
    const [carNoError, setcarNoError] = useState(null);
    const [phnNoError, setphnNoError] = useState(null);
    const [PassError, setPassError] = useState(null);
    const [conPassError, setconPassError] = useState(null);
    const [loading, setloading] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))

        switch (name) {
            case "carNo":
                value ? validateCarNumber(value) ? setcarNoError(null) : setcarNoError("Enter a valid carNo") : setcarNoError(null)
                break;

            case "phnNo":
                value ? !validatePhoneNumber(value) ? setphnNoError("Enter a valid phone No") : setphnNoError(null) : setphnNoError(null)
                break;

            case "password":
                value ? !passwordValidation(value) ? setPassError("Password must be at least 8 characters with uppercase, lowercase letters") : setPassError(null) : setPassError(null)
                value ? !conPasswordValitaion(value) ? setconPassError("Password Didn't match") : setconPassError(null) : setconPassError(null)
                break;

            case "conpassword":
                value ? !conPasswordValitaion(value) ? setconPassError("Password Didn't match") : setconPassError(null) : setconPassError(null)
                break;

            default:
                break

        }
    }

    function RegisterCheck(res, cookieOptions) {


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
        } else if (res.status == 400) {
            toast.error(
                res.data?.error?.username ?
                    "User Name Already Registered" :
                    (
                        res.data?.error?.phnNo ?
                            "Enter a Valid phone No" :
                            res.data.message
                    ),
                {
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

    const handleSubmit = (event) => {
        setloading(true);
        event.preventDefault();
        console.log(inputs);
        if (
            validateCarNumber(inputs.carNo) &&
            validatePhoneNumber(inputs.phnNo) &&
            passwordValidation(inputs.password) &&
            conPasswordValitaion(inputs.conpassword)
        ) {
            const cookieOptions = {
                path: "/",
                expires: 7,
            };


            dispatch(
                userRegister(
                    {
                        user: {
                            username: inputs.username,
                            password: inputs.password,
                            is_superuser: false,
                            first_name: inputs.first_name,
                            last_name: inputs.last_name,
                            email: inputs.email
                        },

                        reserver: {
                            carNo: inputs.carNo,
                            phnNo: "+94"+inputs.phnNo,

                        }
                    }

                    , (res) => {
                        RegisterCheck(res, cookieOptions)
                        console.log(res)
                    })
            )

        } else {
            console.log("val fail")
        }

    }

    function validateCarNumber(carNumber) {
        const carNoValidator = /^([a-zA-Z]{1,3}|([0-9]{1,3}))-[0-9]{4}$/;
        return carNoValidator.test(carNumber);
    }

    function validatePhoneNumber(phoneNumber) {
        const phnNoValidator = /^(?:\d{9}|\d{2}-\d{7}|\d{3}-\d{6}|\d{2}-\d{3}-\d{4})$/;
        return phnNoValidator.test(phoneNumber);
    }

    function passwordValidation(pass) {
        const passwordValidator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordValidator.test(pass);
    }

    function conPasswordValitaion(pass) {
        return pass === inputs.password;
    }




    return (
        <>
            <CommonSignComponent>
                <form onSubmit={handleSubmit}>

                    {singnUpInputDetails.map((item, index) => (
                        <div key={index} className='ps-2 pe-2'>
                            <CommonInputs
                                Label={item.Label}
                                PlaceHolder={item.PlaceHolder}
                                onChange={handleChange}
                                Type={item.Type}
                                Name={item.Name}
                                phoneNumber={item.Name == "phnNo" ? true : false}
                                error={
                                    item.Name == "phnNo" ?
                                        phnNoError :
                                        (item.Name == "carNo" ?
                                            carNoError :
                                            (item.Name == "password" ?
                                                PassError :
                                                (item.Name == "conpassword" ?
                                                    conPassError : null)
                                            )
                                        )
                                }
                            />
                        </div>
                    ))}

                    <div className='mt-4 d-flex justify-content-end align-items-center pe-4 mb-5'>
                        <CommonButton loading={loading} ButtonText={"Sign Up"} />
                    </div>

                </form>
            </CommonSignComponent>
            <ToastContainer autoClose={8000} />
        </>
    )
}

export default SignUp
