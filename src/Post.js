import React from 'react'; 
import Avatar from '@material-ui/core/Avatar'

function Post({username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="mikemathias"
                    src=""
                />
                <div className="post__userName"><h3>{username}</h3></div>
            </div>
            <img className="post__image" src={imageUrl}/>
            <h4 className="post__text"><strong>{username}</strong>: {caption}</h4>
        </div>
    )
}

export default Post
