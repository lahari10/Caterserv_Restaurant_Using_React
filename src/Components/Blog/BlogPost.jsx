// BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = ({ posts }) => {
    const { postId } = useParams();
    const post = posts.find(post => post.id.toString() === postId);

    return (
        <div className="blog-post">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default BlogPost;
