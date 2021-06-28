import axios from "axios";
import { parseCookies } from "nookies";
import { getToken } from "./auth";

const cookies = parseCookies();
const token = cookies['next-token'];

const api = axios.create({
    baseURL: "http://127.0.0.1:3060"
});

api.interceptors.request.use(config => {
  console.log(config);

  return config;
})

if(token){
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

//api.interceptors.request.use(async config => {
//    const token = getToken();
//    if (token) {
//      config.headers.Authorization = `Bearer ${token}`;
//    }
//    return config;
//});

export default api;