import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import User from '../../components/LittleComponents/User';
import PostWithComments from '../../components/LittleComponents/PostWithComments';
import './OneUser.css'

const OneUserPost = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${userId}`)
            .then(response => response.json())
            .then(userData => {
                setUser(userData);
            })
            .catch(error => console.log(error));

        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(usersData => setUsers(usersData))
            .catch(error => console.log(error));

        fetch('http://localhost:5000/posts')
            .then(response => response.json())
            .then(postsData => {
                const postsOfUser = postsData.filter(post => post.userId === userId);
                setUserPosts(postsOfUser);
            })
            .catch(error => console.log(error));

        fetch('http://localhost:5000/comments')
            .then(response => response.json())
            .then(commentsData => setComments(commentsData))
            .catch(error => console.log(error));
    }, [userId]);

    return (
        <div className='one-user'>
            {user && <User user={user} />}
            {userPosts.map(post => (
                <PostWithComments
                    key={post.id}
                    post={post}
                    users={users}
                    comments={comments.filter(comment => comment.postId === post.id)}
                />
            ))}
        </div>
    );
};

export default OneUserPost;


