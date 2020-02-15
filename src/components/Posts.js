import React, { useState, useEffect } from 'react'
import SinglePost from './SinglePost'

const Posts = () => {

const [posts, setPosts] = useState([])

/* useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json();)
                .then(posts => setPosts(posts))
            })
            .catch(error => {
                console.log(error)
            })
        }, [])
 */

const url = 'https://jsonplaceholder.typicode.com/posts';

useEffect(() => {
    fetch(url)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            else {
                throw Error("Error fetching posts!")
            }
        })
        .then(posts => {
            setPosts(posts);
        })
        .catch(error => {
            console.log(error);
        })
}, [url])


return (
        <div>
            {posts.map(post => (
                <SinglePost key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    )
}

export default Posts
