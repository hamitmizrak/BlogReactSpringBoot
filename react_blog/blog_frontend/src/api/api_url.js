import axios from "axios";

export const login_api_url=(body)=>{
    return axios.post('/api/logins/create',body)
}