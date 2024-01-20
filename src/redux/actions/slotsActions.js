import { environment } from "../../environment/environment.js";
import HttpInterceptor from "../../services/http-interceptor.js";




const http = new HttpInterceptor();


export const addSlot = (body, callback) => async (dispatch) => {
    const endpoint = `${environment.api_base_url}/bookingSlots/`;

    try {
        http.post(endpoint, body)
            .then((response) => {
                callback(response);
            })
            .catch((error) => {
                callback(error.response);

            });
    } catch (error) {
        callback(error.response);
    }
}


export const getAllSlots = (callback) => async (dispatch) => {
    const endpoint = `${environment.api_base_url}/bookingSlots/`;

    try {
        http.get(endpoint)
            .then((response) => {
                callback(response);
            })
            .catch((error) => {
                callback(error.response);

            });
    } catch (error) {
        callback(error.response);
    }
}

