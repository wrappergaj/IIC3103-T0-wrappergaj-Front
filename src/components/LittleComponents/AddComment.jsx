import React, { useState } from 'react';
import './AddComment.css'

function AddComment({ onSubmit, users }) {
    const [text, setText] = useState('');
    const [userId, setUserId] = useState('');

    const handleChangeText = event => {
        setText(event.target.value);
    };

    const handleChangeUserId = event => {
        setUserId(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (text.trim() === '' || userId.trim() === '') {
            return;
        }
        onSubmit(text, userId);
        setText('');
        setUserId('');
    };

    return (
        <form className="add-comments-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribe tu comentario..."
                value={text}
                onChange={handleChangeText}
            />
            <input
                type="text"
                placeholder="Escribe tu userId..."
                value={userId}
                onChange={handleChangeUserId}
            />
            <button type="submit">Agregar Comentario</button>
        </form>
    );
}

export default AddComment;