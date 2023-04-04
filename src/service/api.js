import axios from "axios";
const token = localStorage.getItem("access_token") === "undefined"? '' :localStorage.getItem("access_token");
const customAxios = axios.create({

    baseURL: 'http://localhost:3001/',
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default customAxios;