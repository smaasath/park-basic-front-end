import React, { useEffect, useState } from 'react';
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import './UserProfile.css'
import CommonButton from "../../../components/common/CommonButton/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, Login, updateUserDetails } from "../../../redux/actions/UserActions";
import CommonLoading from "../../../components/common/CommonLoading/CommonLoading";
import { passwordValidation } from "../../../Validations/Validations";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast, ToastContainer } from 'react-toastify';


const UserProfile = () => {
    const [edit, setEdit] = useState(false)
    const [editPass, setEditPass] = useState(false)
    const [edited, setedited] = useState(0)
    const { userData } = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false)
    const [inputs, setInputs] = useState(userData)
    const [inputPassword, setinputPassword] = useState({})
    const [error, setError] = useState(null)


    const navigate = useNavigate();

    function logout() {
        Cookies.remove('token', { path: '/' })
        navigate('/')
    }

    useEffect(() => {
        setTimeout(() => {
            setError(null)
        }, 1000)
    }, [error])
    useEffect(() => {
        setInputs(userData)
        if (userData === null) {
            setloading(true)
            dispatch(
                getUserDetails(
                    (res) => {
                        if (res?.status === 200) {
                            setloading(false)
                            setInputs(res.data)
                        }

                    }
                )
            )
        }
    }, [])


    useEffect(() => {
        dispatch(
            getUserDetails(
                (res) => {
                    if (res?.status === 200) {
                        setInputs(res.data)
                    }

                }
            )
        )
    }, [edited])

    const handleChangePassword = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinputPassword(values => ({ ...values, [name]: value }))
    }


    const handleSubmitPassword = () => {

        const passValitade = passwordValidation(inputPassword.password)
        const conPassValidation = inputPassword.password === inputPassword.conpassword;

        if (passValitade && conPassValidation) {
            setloading(true)
            dispatch(
                updateUserDetails(
                    {
                        user: inputPassword
                    }
                    ,
                    (res) => {
                        console.log(res)
                        if (res?.status == 200) {
                            setloading(false)
                            setEditPass(false)
                            setedited(edited + 1)
                            toast.success("Successfully Password Changed", {
                                autoClose: 1000
                            });

                        } else if (res?.status == 400) {
                            setloading(false)
                            toast.error("incorrecr old Changed", {
                                autoClose: 1000
                            });
                        } else {
                            setloading(false)
                            toast.error("some thing went wrong", {
                                autoClose: 1000
                            });
                        }
                    }
                )
            )
        } else {
            if (!passValitade) {
                setError("Password must be at least 8 characters with uppercase, lowercase letters")
            } else if (!conPassValidation) {
                setError("Password Didn't match")
            }

        }


    }
    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputs((prevInputs) => {
            if (!prevInputs) {
                return (
                    userData?.reserver ?
                        {

                            user: {
                                [name]: value,
                                username: '',
                                email: '',
                                first_name: '',
                                last_name: '',
                            },
                            reserver: {
                                [name]: value,
                                phnNo: '',
                                carNo: '',
                            },
                        }
                        : {
                            user: {
                                [name]: value,
                                username: '',
                                email: '',
                                first_name: '',
                                last_name: '',
                            }
                        }
                );
            }

            return (
                userData?.reserver ?
                    {
                        ...prevInputs,
                        user: {
                            ...prevInputs.user,
                            [name]: value,
                        },
                        reserver: prevInputs.reserver
                            ? {
                                ...prevInputs.reserver,
                                [name]: value,
                            }
                            : undefined,
                    }
                    :
                    {
                        ...prevInputs,
                        user: {
                            ...prevInputs.user,
                            [name]: value,
                        },
                    });
        });
    };


    const handleSubmitdetails = () => {
        setloading(true)
        dispatch(
            updateUserDetails(
                inputs,
                (res) => {
                    if (res.status == 200) {
                        setloading(false)
                        setEdit(false)
                        setedited(edited + 1)
                        toast.success("Successfully user Details Changed", {
                            autoClose: 1000
                        });
                    }else{
                        setloading(false)
                        setEdit(false)
                        setedited(edited + 1)
                        toast.error("user Didn't change", {
                            autoClose: 1000
                        });
                    }
                }
            )
        )
        // setEdit(false)


    }

    return (
        <div className="custom">
            <NavBar />
            <div className={loading ? 'container rounded mt-5 mb-5' : 'container bg-white rounded mt-5 mb-5'}>
                {loading ? (
                    <CommonLoading onlySpin={true} />
                ) : (
                    <div className="row">
                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img
                                    className="rounded-circle mt-5"
                                    width="150px"
                                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                    alt="Profile"
                                />
                                <span className="font-weight-bold">{inputs?.user?.username}</span>
                                <span className="text-black-50">{inputs?.user?.email}</span>
                            </div>
                        </div>
                        {userData?.reserver != null ? (
                            <div className="first-form " style={{ backgroundColor: "#EDEDED" }}>

                                <div className="col-md-8 row">
                                    <div className="col-md-6 border-right">
                                        <div className="p-3 py-5">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="text-right">User Details</h4>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="labels">First Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="first name"
                                                        name="first_name"
                                                        onChange={handleChange}
                                                        value={inputs?.user?.first_name}
                                                        disabled={!edit}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="labels">Last Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="last_name"
                                                        onChange={handleChange}
                                                        value={inputs?.user?.last_name}
                                                        placeholder="last name"
                                                        disabled={!edit}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mt-2.1">
                                                <div className="col-md-6">
                                                    <label className="labels">User Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="user"
                                                        name="username"
                                                        onChange={handleChange}
                                                        value={inputs?.user?.username}
                                                        disabled={!edit}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="labels">Email</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="user@gmail.com"
                                                        name="email"
                                                        onChange={handleChange}
                                                        value={inputs?.user?.email}
                                                        disabled={!edit}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="p-3 py-5">
                                            <div
                                                className="d-flex justify-content-between align-items-center experience">

                                                <h4 className="text-right">Booking Details</h4>

                                            </div>
                                            <br />
                                            <div className="">
                                                <label className="labels">Vehicle NO</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="xx xxx-xxxx"
                                                    onChange={handleChange}
                                                    name="carNo"
                                                    value={inputs?.reserver?.carNo}
                                                    disabled={!edit}
                                                />
                                            </div>
                                            <br />
                                            <div className="">
                                                <label className="labels">Telephone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="+94XXXXXXXXX"
                                                    name="phnNo"
                                                    onChange={handleChange}
                                                    value={inputs?.reserver?.phnNo}
                                                    disabled={!edit}
                                                />
                                            </div>

                                        </div>
                                    </div>

                                    <div
                                        className="mt-5 d-flex justify-content-end gap-5 align-content-center align-items-center">
                                        <div>
                                            <button
                                                onClick={() => setEdit(false)}
                                                className="ps-3 pe-3"
                                                style={{
                                                    height: 35,
                                                    borderWidth: 0,
                                                    borderRadius: 30,
                                                    backgroundColor: '#95A5A6',
                                                }}
                                            >
                                                <div style={{ fontSize: 16, fontWeight: 700 }}>Cancel</div>
                                            </button>
                                        </div>
                                        {edit === true ? (
                                            <>
                                                <CommonButton
                                                    onclick={() => handleSubmitdetails()}
                                                    ButtonText="Save" />
                                            </>
                                        ) : (
                                            <div>
                                                <CommonButton
                                                    onclick={() => setEdit(true)}
                                                    ButtonText="Edit"
                                                />

                                            </div>
                                        )}
                                    </div>

                                </div>

                            </div>
                        ) : null}
                        <div className="pb-5 pt-2 row mt-2.2">
                            <div className="second-form col-md-6">
                                <div>
                                    {/*<button*/}
                                    {/*    onClick={() => setEditPass(true)}*/}
                                    {/*    className="ps-3 pe-3"*/}
                                    {/*    style={{*/}
                                    {/*        height: 35,*/}
                                    {/*        borderWidth: 0,*/}
                                    {/*        borderRadius: 30,*/}
                                    {/*        backgroundColor: '#95A5A6',*/}
                                    {/*    }}*/}
                                    {/*>*/}
                                    {/*    <div style={{fontSize: 16, fontWeight: 700}}>Change Password</div>*/}
                                    {/*</button>*/}
                                    <a
                                        style={{ textDecoration: "none" }}
                                        href="#"
                                        onClick={() => setEditPass(true)}>
                                        <div style={{ fontSize: 16, fontWeight: 700, color: "#95A5A6" }}>Change Password ?</div>
                                    </a>
                                </div>
                                {editPass ? (
                                    <>

                                        <div className="col-md-6">
                                            <label className="labels">Old Password</label>
                                            <input
                                                name={"oldpassword"}
                                                type="password"
                                                onChange={handleChangePassword}
                                                className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="labels">New Password</label>
                                            <input
                                                name={"password"}
                                                type="password"
                                                onChange={handleChangePassword}
                                                className="form-control" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="labels">Confirm Password</label>
                                            <input
                                                onChange={handleChangePassword}
                                                type="password"
                                                className="form-control"
                                                name='conpassword'

                                            />
                                        </div>
                                        <div className={"text-danger"}>{error}</div>
                                        <div
                                            className="mt-3 d-flex justify-content-end gap-5 align-items-center align-content-center">
                                            <div>
                                                <button
                                                    type='button'
                                                    onClick={() => setEditPass(false)}
                                                    className="ps-3 pe-3"
                                                    style={{
                                                        height: 35,
                                                        borderWidth: 0,
                                                        borderRadius: 30,
                                                        backgroundColor: '#95A5A6',
                                                    }}
                                                >
                                                    <div style={{ fontSize: 16, fontWeight: 700 }}>Cancel</div>
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    type='submiit'
                                                    className="ps-3 pe-3"
                                                    style={{
                                                        height: 35,
                                                        borderWidth: 0,
                                                        borderRadius: 30,
                                                        backgroundColor: '#95A5A6',
                                                    }}
                                                    onClick={() => handleSubmitPassword()}
                                                >
                                                    <div style={{ fontSize: 16, fontWeight: 700 }}>Change</div>
                                                </button>
                                            </div>
                                        </div>

                                    </>

                                ) : null}
                            </div>
                            <div className="col-md-6 text-end">
                                <CommonButton

                                    ButtonText="Logout"
                                    onclick={() => logout()}
                                />
                            </div>
                        </div>

                    </div>
                )}

                <div className="d-flex justify-content-center">
                    {/*<CommonButton*/}

                    {/*    ButtonText="logout"*/}
                    {/*    onclick={() => logout()}*/}
                    {/*/>*/}
                </div>
            </div>
            <ToastContainer autoClose={8000} />
            <Footer />
        </div>
    )
};

export default UserProfile;
