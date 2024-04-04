import React, { useState } from 'react';
import './CreatePost.css';

function CreatePostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const body_response = JSON.stringify({ title, content, image, userId });
            const response = await fetch('https://iic3103-t1-wrappergaj.onrender.com/posts', {
                method: 'POST',
                body: body_response,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            console.log(body_response)
            
            if (!response.ok) {
                throw new Error('No se pudo crear el post');
            }

            setTitle('');
            setContent('');
            setImage('');
            setUserId('');

            alert('Post creado exitosamente!');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='create-post-form'>
            <h2>Crear Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Contenido:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image">Imagen (URL):</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userId">User ID :</label>
                    <input
                        type="text"
                        id="userid"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Post</button>
            </form>
        </div>
    );
}

export default CreatePostForm;