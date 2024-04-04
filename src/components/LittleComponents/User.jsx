import React from 'react'
import './User.css'

function User({user}) {
    return (
        <div className='username'>
            <h2>{user.username}</h2>
            <img src={user.avatar} alt="Avatar" />
        </div>
    )
}

export default User