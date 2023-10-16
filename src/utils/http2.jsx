import axios from "axios";

const Token2 = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : undefined

// Level 4
const http2 = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 30000,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${Token2}`
    }
});

export default http2;