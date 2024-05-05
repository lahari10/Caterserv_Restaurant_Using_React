// BlogList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Blog.css';

const BlogList = ({ posts }) => {
    return (
        <div className="blog-list">
            {posts.map(post => (
                <div key={post.id} className="post-preview">
                    <h2>{post.title}</h2>
                    <p>{post.description.substring(0, 100)}...</p>
                    <Link to={`/blog/${post.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
