import axios from "axios";
import { parseCookies } from "nookies";

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

export default api;