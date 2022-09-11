import React from 'react';
import './Button.css'

const Button = ({ onClick }) => {
    return <button className='add-button' onClick={onClick}>Adicionar</button>
};

export default Button;