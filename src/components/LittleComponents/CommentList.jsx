import React from 'react';
import Comment from './Comment';
import './CommentList.css'

function CommentList({ comments, users }) {
    return (
        <div className='commentlist'>
            <h2>Comments</h2>
            {comments.map(comment => (
                <div key={comment.id} className="comment-container">
                    <Comment users={users} comment={comment} />
                </div>
            ))}
        </div>
    );
}

export default CommentList;