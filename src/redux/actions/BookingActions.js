import { environment } from "../../environment/environment.js";
import HttpInterceptor from "../../services/http-interceptor.js";

const http = new HttpInterceptor();

export const getAllBookings = (callback) => async (dispatch) => {
  const endpoint = `${environment.api_base_url}/booking/`;

  try {
    http
      .get(endpoint)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};

export const getBookingById = (id, callback) => async (dispatch) => {
  const endpoint = `${environment.api_base_url}/booking/${id}`;

  try {
    http
      .get(endpoint)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error.response);
      });
  } catch (error) {
    callback(error.response);
  }
};
