// useCep.js
import { useState, useEffect } from 'react';
import fireToast from './fireToast';
import { base } from '../utils/axios/axiosFactory';

const useTableDream = () => {

    const [dreams, setDreams] = useState([]);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await base.get('/dreams/');
                console.log(response)
                if (response.status === 200) {
                    console.log(response.data)
                    setDreams(response.data);
                } else {
                    console.error('Erro ao obter dados da API');
                }
            } catch (error) {
                console.log(error)
                console.error('Erro ao processar a solicitação:', error);
            }
        };

        fetchData();
    }, []);

    return {
        dreams,
        setIsOpen,
        isOpen
    };
};

export default useTableDream;
