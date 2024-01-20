// import React from 'react'
// import './CommonAdminLayout.css'

// const CommonAdminLayout = () => {
//   return (
//     <div>
//       lkashdkjagsdv
//     </div>
//   )
// }

// export default CommonAdminLayout

import React, { useEffect, useState, useCallback } from "react";
import parklogo from "../../../assests/pictures/park-basic-logo.png";
import BookingIcon from "../../../assests/pictures/icons8-booking-100.png";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CommonAdminLayout.css";
import NavBar from "../../NavBar/NavBar";

// import profilepic from ".../../../assests/pictures/park-basic-logo.png";

function Sidebar({ children }) {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [open] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="row CommonAdminLayout-body">
        <div style={{backgroundColor:"#F2F3F4"}} className={!open ? "col-2" : "col-1"}>
          <div
            className="sidebaar"
            style={{ width: !open && windowSize[0] * 0.155 }}
          >
            <div className="mt-5">
              {!open && windowSize[0] >= 800 ? (
                <div className="row align-items-center justify-content-center ">
                  <img src={parklogo} alt={""} className="w-50" />
                </div>
              ) : (
                <div className="ms-4">
                  <img src={parklogo} alt={""} className="w-25" />
                </div>
              )}
            </div>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white">
              <div className={"w-100 px-sm-2 mt-5"}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "side-menu-item side-menu-active "
                      : "side-menu-item "
                  }
                  to={"/dashboard"}
                >
                  <div className={"d-flex"}>
                    <img
                      src={BookingIcon}
                      alt={""}
                      style={{ heigh: 20, width: 20 }}
                      className={
                        !open && windowSize[0] >= 800 ? "me-2" : "ms-1"
                      }
                    />

                    {!open && windowSize[0] >= 800 ? (
                      <div style={{textDecoration:"none"}} className={"text-dark"}>Dashboard</div>
                    ) : (
                      ""
                    )}
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className={!open ? "col-10 p-0" : "col-11"}>
          <div>
            <NavBar isAdmin={true} />
          </div>

          <div className="p-3">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
