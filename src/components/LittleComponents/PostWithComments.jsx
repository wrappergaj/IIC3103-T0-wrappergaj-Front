import React, { useState } from 'react';
import Post from './Post';
import CommentList from './CommentList';
import AddComment from './AddComment';
import './PostWithComments.css'

function PostWithComments({ users, post, comments }) {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const handleCommentSubmit = (text, userId) => {
        const data = {
            "content": text,
            "userId": userId,
            "postId": post.id
        };

        fetch('http://localhost:5000/comments', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Comentario creado:', data);
            })
            .catch(error => {
                console.error('Error al crear comentario:', error);
            });
    };

    return (
        <div className='post-with-comments'>
            <Post users={users} post={post} />
            <AddComment onSubmit={handleCommentSubmit} users={users} />
            <button onClick={toggleComments}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
            </button>
            {showComments && <CommentList comments={comments} users={users} />}
        </div>
    );
}

export default PostWithComments;