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
        const jwt = localStorage.getItem('jwt')
        config.headers.Authorization = `Token ${jwt}`
        return config
    })

    axiosInstance.interceptors.response.use((response) => {
        return response
    }, async function (err) {
        console.log(err)
        // const originalRequest = err.config
        // window.location.href = '/login'
        // return axios(originalRequest)
    }
    )
    return axiosInstance; // Adicione esta linha para retornar a instância criada

}


