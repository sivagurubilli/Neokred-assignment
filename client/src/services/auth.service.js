import axios from "axios";
import { API_BASE_URL, API_PATHS } from "../utils/constants/api.constants";

class AuthService {
    static login(item) {
        return axios
            .post(API_PATHS.cookLogin, item)
            .then((response) => {
                if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    static register(item) {
        return axios
            .post(API_PATHS.cookRegister,
                item
            )
            .then((response) => {
                if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    static removeUserDetails() {
        localStorage.removeItem("user");
    }

    static getUserDetails() {
        return JSON.parse(localStorage.getItem("user"));
    }
}




export default AuthService;