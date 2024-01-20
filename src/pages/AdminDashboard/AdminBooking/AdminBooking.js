import React from "react";
import CommonAdminLayout from "../../../components/common/CommonAdminLayout/CommonAdminLayout";
import "./AdminBooking.css";
import viewicon from "../../../assests/pictures/viewicon.png";

const AdminBooking = () => {
  return (
    <div>
      <CommonAdminLayout>
        <div className="container">
          <div className="row">
            <div className="col">
              <select
                classNames="selectpicker outline "
                data-live-search="true"
                placeholder="Filter"
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
            <div class="col"></div>
            <div className="col"></div>
            <div className="col">
              <form className="d-flex justify-content-center" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div style={{ overflow: "scroll",maxHeight: 500 }}>
            <table className="table table-hover mt-5">
              <thead>
                <tr className="sticky-top">
                  <th classNamee="col-1">Id</th>
                  <th className="col-2">Date</th>
                  <th className="col-2">Time</th>
                  <th className="col-1">Slot</th>
                  <th className="col-2">Car no</th>
                  <th className="col-3">Reserver Name</th>
                  <th className="col-1">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-1">Id</td>
                  <td className="col-2">Date</td>
                  <td className="col-2">Time</td>
                  <td className="col-1">Slot</td>
                  <td className="col-2">Car no</td>
                  <td className="col-3">Reserver Name</td>
                  <td className="col-1"></td>
                </tr>
                <tr>
                  <td className="col-1">Id</td>
                  <td className="col-2">Date</td>
                  <td className="col-2">Time</td>
                  <td className="col-1">Slot</td>
                  <td className="col-2">Car no</td>
                  <td className="col-3">Reserver Name</td>
                  <td className="col-1"></td>
                </tr>
                <tr>
                  <td className="col-1">Id</td>
                  <td className="col-2">Date</td>
                  <td className="col-2">Time</td>
                  <td className="col-1">Slot</td>
                  <td className="col-2">Car no</td>
                  <td className="col-3">Reserver Name</td>
                  <td className="col-1"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CommonAdminLayout>
    </div>
  );
};

export default AdminBooking;
