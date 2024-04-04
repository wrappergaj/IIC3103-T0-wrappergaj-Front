import React from 'react';
import { Link } from 'react-router-dom';
import './Comment.css'

function Comment({ users, comment }) {
    const user = users.find(user => user.id === comment.userId);

    if (!user) {
        return <div className='comment'>Usuario no encontrado</div>;
    }
    console.log("texto:", toString(comment.content))
    return (
        <div className='comment'>
            <strong>
                <Link to={`/one-user/${user.id}`}>{user.username}</Link>
            </strong>: {comment.content} 
        </div>
    );
}

export default Comment;
