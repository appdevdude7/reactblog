import React from 'react'

const SinglePost = ({ title,body }) => {
    return (
        <div>
            <h3> {title} </h3>
            <p> {body} </p>
        </div>
    )
}

export default SinglePost
