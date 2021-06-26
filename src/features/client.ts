import axios from "axios";
import {API_URL} from "Constants";

const client = axios.create({
    baseURL: API_URL,
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken"
});

export default client;