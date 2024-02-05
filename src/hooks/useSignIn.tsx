// useCep.js
import { useState, useEffect } from 'react';
import fireToast from './fireToast';
import { base } from '../utils/axios/axiosFactory';
import { AxiosError } from 'axios';

const useSignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true)
        try {
            const response = await base.post('/token/', {
                username, password
            })
            localStorage.setItem('jwtToken', response.data.access);
            window.location.href = '/tables'

        }
        catch (err: any) {
            if (err.response.status == 401) {
                return fireToast('Problema com os dados', 'Verifique as credenciais')
            }
            fireToast('Problema com o servidor', 'Entre em contato com o desenvolvedor')

        }
        finally {
            setIsLoading(false)
        }

    }

    return {
        setUsername,
        username,
        setPassword,
        password,
        handleSubmit,
        setIsLoading,
        isLoading
    };
};

export default useSignIn;
