// useCep.js
import { useState, useEffect } from 'react';
import fireToast from './fireToast';
import { axiosInstance } from '../utils/axios';

const useTableDream = () => {

    const [dreams, setDreams] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/dreams/');

                if (response.status === 200) {
                    console.log(response.data)
                    setDreams(response.data);
                } else {
                    console.error('Erro ao obter dados da API');
                }
            } catch (error) {
                console.error('Erro ao processar a solicitação:', error);
            }
        };

        fetchData();
    }, []);

    return {
        dreams
    };
};

export default useTableDream;
