// useCep.js
import { useState, useEffect } from 'react';
import fireToast from './fireToast';
import { base } from '../utils/axios/axiosFactory';
import { Dream } from '../types/dreams';

const useTableDream = () => {

    const [dreams, setDreams] = useState<Dream[]>([]);
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDream, setSelectedDream] = useState<Dream>()
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

    const handleDream = async (dream_id: number) => {
        const response = await base.get(`/dreams/${dream_id}`)
        setSelectedDream(response.data)
        console.log(response.data)

    }


    return {
        dreams,
        setIsOpen,
        isOpen,
        handleDream,
        selectedDream
    };
};

export default useTableDream;
