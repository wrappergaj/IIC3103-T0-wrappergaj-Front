import React, { useState } from 'react';
import './CreateUser.css'

function CreateUserForm() {
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const body_response = JSON.stringify({ username, avatar });
            const response = await fetch('https://iic3103-t1-wrappergaj.onrender.com/users', {
                method: 'POST',
                body: body_response,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(body_response)  // Convirtiendo el objeto en formato JSON


            if (!response.ok) {
                throw new Error('No se pudo crear el usuario');
            }

            setUsername('');
            setAvatar('');

            alert('Usuario creado exitosamente!');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="create-user-form">
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="avatar">Avatar (URL):</label>
                    <input
                        type="text"
                        id="avatar"
                        value={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Usuario</button>
            </form>
        </div>
    );
}

export default CreateUserForm;


