import React, { useState, useEffect } from 'react';
import PostWithComments from '../../components/LittleComponents/PostWithComments';
import './AllPost.css'

const AllPost = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])

    // GET
    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(response =>  response.json())
            .then(data => setPosts(data))
            .then(console.log(posts))
            .catch(error => console.log(error))

        fetch('http://localhost:5000/users')
            .then(response =>  response.json())
            .then(data => setUsers(data))
            .then(console.log(users))
            .catch(error => console.log(error))

        fetch('http://localhost:5000/comments')
            .then(response =>  response.json())
            .then(data => setComments(data))
            .then(console.log(comments))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='all-post'>
            {posts.map(post => (
                <PostWithComments
                    key={post.id}
                    post={post}
                    users={users}
                    comments={comments.filter(comment => comment.postId === post.id)}
                />
            ))}
        </div>
    )
}

export default AllPost

