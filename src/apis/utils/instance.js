import axios from "axios";
import qs from "qs";

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers:  {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")
    }
});

instance.defaults.paramsSerializer = params => {
    return qs.stringify(params);
}

export default instance;