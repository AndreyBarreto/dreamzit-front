// useCep.js
import { useState } from 'react';
import fireToast from './fireToast';

const useDreamHandler = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const register = () => {

    }

    return {
        description,
        setDescription,
        title,
        setTitle
    };
};

export default useDreamHandler;
