// useCep.js
import { useState } from 'react';
import fireToast from './fireToast';
import { base } from '../utils/axios/axiosFactory';


const useCreateDreamHandler = () => {

    const [title, setTitle] = useState('');
    const [dreamType, setDreamType] = useState('');
    const [description, setDescription] = useState('');
    const [feelings, setFellings] = useState<string[]>([]);

    const onSubmit = () => {
        base.post('/dreams/', { data: 'conteudo' })
            .then(response => {
                console.log('Resposta da requisição:', response.data);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }

    const removeFelling = (deleted_feeling: string) => {
        const updatedFeelings = feelings.filter(feeling => feeling !== deleted_feeling);
        setFellings(updatedFeelings)
    }

    const addFelling = (feeling: string) => {
        if (feeling in feelings) {
            return
        }
        console.log('oi')
        setFellings([...feelings, feeling])

    }

    return {
        description,
        title,
        feelings,
        setDescription,
        setTitle,
        onSubmit,
        setFellings,
        removeFelling,
        addFelling,
    };
};

export default useCreateDreamHandler;
