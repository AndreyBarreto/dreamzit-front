// useCep.js
import { useState } from 'react';
import fireToast from './fireToast';
import { base } from '../utils/axios/axiosFactory';


const useCreateDreamHandler = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const register = () => {
        base.post('/dreams/', { data: 'conteudo' })
            .then(response => {
                console.log('Resposta da requisição:', response.data);
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
            });
    }

    return {
        description,
        setDescription,
        title,
        setTitle,
        register
    };
};

export default useCreateDreamHandler;
