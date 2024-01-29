import React from 'react';
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";


import CommonButton from "../../../components/common/CommonButton/CommonButton";

import './ProfileEdit.css'

const UserProfile = () => {
    return (
        <div className={"custom"}>

            <div className="container rounded bg-white mt-5 mb-5">

                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                className="rounded-circle mt-5"
                                width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                alt="Profile"
                            />
                            <span className="font-weight-bold">User</span>
                            <span className="text-black-50">parkIt@gmail.com.my</span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">

                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">User Details</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">First Name</label>
                                    <input type="text" className="form-control" placeholder="first name" value="" />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Last Name</label>
                                    <input type="text" className="form-control" value="" placeholder="last name" />
                                </div>
                            </div>

                            <div className="row mt-2.1">
                                <div className="col-md-6">
                                    <label className="labels">Email</label>
                                    <input type="text" className="form-control" placeholder="user@gmail.com" value="" />
                                </div>
                                {/*<div className="col-md-6">*/}
                                {/*    <label className="labels">Last Name</label>*/}
                                {/*    <input type="text" className="form-control" value="" placeholder="last name" />*/}
                                {/*</div>*/}
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                                <span><h4 className="text-right">Booking Details</h4></span>
                                <span >

              </span>
                            </div>
                            <br />
                            <div className="">
                                <label className="labels">Vehicle NO</label>
                                <input type="text" className="form-control" placeholder="xx xxx-xxxx" value="" />
                            </div>
                            <br />
                            <div className="">
                                <label className="labels">Telephone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="+94XXXXXXXXX"
                                    value=""
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center experience">
                            <span>

                            </span>
                                <span>
                               <a href="/UserProfile"><CommonButton
                                   // onclick={logout}

                                   ButtonText={"Update and Save"}
                               /></a>

                            </span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;
