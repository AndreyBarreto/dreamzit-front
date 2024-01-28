// Importe a biblioteca Axios
import axios from "axios";

// Crie um objeto Axios com configurações opcionais
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer SeuTokenAqui'
    }
});


