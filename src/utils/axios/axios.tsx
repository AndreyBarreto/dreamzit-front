import axios from "axios";

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
        let statusCode = err.response.status
        if (window.location.pathname == '/signin') {
        }
        else if (statusCode == 401) {
            window.location.href = '/signin'
        }
        return axios(err.config);
        // const originalRequest = err.config
        // window.location.href = '/login'
        // return axios(originalRequest)
    }
    )
    return axiosInstance; // Adicione esta linha para retornar a instância criada

}


