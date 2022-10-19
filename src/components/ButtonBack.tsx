import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonBack = (props: any) => {
    const navigate = useNavigate();

    props = {
        name: '<BackButton/>',
    };

    console.log(`Hello from: ${props.name}`);

    return (
        <button
            className="absolute underline block text-l text-left top-5 left-5 z-10"
            onClick={() => navigate(-1)}>
            Back
        </button>
    );
};

export default ButtonBack;
