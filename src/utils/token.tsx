import { base } from "./axios/axiosFactory"
import { jwtDecode } from 'jwt-decode'

export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken')
}
export const getJwtToken = async () => {
    return localStorage.getItem('jwtToken')
}
export const setJwtToken = async (token: string) => {
    localStorage.setItem('jwtToken', token);
}
export const setRefreshToken = async (token: string) => {
    localStorage.setItem('refreshToken', token);
}
export const cleanAllTokens = async () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
}

export const useRefreshToken = async () => {
    const payload = {
        refresh: getRefreshToken()
    }

    const response = await base.post('/token/refresh/', payload)
    setJwtToken(response.data.access)
    setRefreshToken(response.data.refresh)
    return response.data.access
}

export const refreshTokenIsExpired = () => {
    const refresh_token = getRefreshToken();
    if (refresh_token) {
        const expirationTime = jwtDecode(refresh_token).exp as number
        const currentTime = Math.floor(Date.now() / 1000)

        return currentTime > expirationTime;
    }

    return false;


}