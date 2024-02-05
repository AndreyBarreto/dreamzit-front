import axios from "axios";
import { refreshTokenIsExpired, useRefreshToken, getJwtToken } from "../token";

export const createAxiosInstance = ({ baseURL = process.env.BACK_URL, path = "" }) => {
    const axiosInstance = axios.create({
        baseURL: `${baseURL}/${path}`,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',

        }
    });

    axiosInstance.interceptors.request.use((config) => {
        const jwt = localStorage.getItem('jwtToken')
        config.headers.Authorization = `Bearer ${jwt}`
        return config

    })

    axiosInstance.interceptors.response.use((response) => {
        return response
    }, async function (err) {
        const request = err.config
        let statusCode = err.response.status
        if (window.location.pathname == '/signin') {
        }
        else if (statusCode == 401) {
            if (refreshTokenIsExpired()) {
                window.location.href = '/signin'
            }
            else {
                let token = await useRefreshToken()
                request.headers.Authorization = `Bearer ${token}`
                request._retry = true
                return axios(request)
            }
        }
        return Promise.reject(err)

    }
    )
    return axiosInstance;

}


