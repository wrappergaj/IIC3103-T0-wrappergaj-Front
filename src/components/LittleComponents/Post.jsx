import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'

function Post({ users, post }) {
    const user = users.find(user => user.id === post.userId);

    if (!user) {
        return <div className='post'>Usuario no encontrado</div>;
    }

    return (
        <div className='post'>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Posted by: <Link to={`/one-user/${user.id}`}>{user.username}</Link></p>
            <img src={post.image} alt="Post" />
        </div>
    );
}

export default Post;
