import React from 'react'
import './CommonDashboardNav'
import { NavLink } from "react-router-dom";

const CommonDashboardNav = ({ icon, windowSize, open, ElementName, navTo }) => {
    return (

        <div className="d-flex flex-column align-items-center align-items-sm-start px-2 text-white">
            <div className={"w-100 px-sm-2"}>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "side-menu-item side-menu-active"
                            : "side-menu-item "
                    }
                    to={navTo}
                >
                    <div className={"d-flex"}>
                        <img
                            src={icon}
                            alt={""}
                            style={{ heigh: 20, width: 20 }}
                            className={
                                !open && windowSize[0] >= 800 ? "me-2" : "ms-1"
                            }
                        />

                        {!open && windowSize[0] >= 800 ? (
                            <div style={{ color: "black" }} className={"ms-3"}><h6>{ElementName}</h6></div>
                        ) : (
                            ""
                        )}
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default CommonDashboardNav
