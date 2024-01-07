import { environment } from "../../environment/environment";
import HttpInterceptor from "../../services/http-interceptor";
import { userData } from "../reducers/UserSlice.js";



const http = new HttpInterceptor();


export const Login = (body, callback) => async (dispatch) => {
    const endpoint = `${environment.api_base_url}/login`;

    try {
        http.post(endpoint, body)
            .then((response) => {
                dispatch(userData(response.data));
                callback(response);


            })
            .catch((error) => {
                callback(error.response);

            });
    } catch (error) {
        callback(error.response);
    }
}