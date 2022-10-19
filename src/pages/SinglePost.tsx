import React, { useEffect, useState } from 'react';
import ButtonBack from '../components/ButtonBack';
import GetSinglePost from '../service/GetSinglePost';

const SinglePost = () => {
    const [title, setTitle] = useState('');
    const { post } = GetSinglePost();

    useEffect(() => {
        setTitle(title);
        setTimeout(() => {
            document.title = `${post.title}`;
        }, 1000);
    }, []);

    return (
        <div>
            <div className="container relative mx-auto">
                <ButtonBack />
                <div className="max-w-xl mx-auto pt-[100px]">
                    <h1 className="text-6xl font-bold mb-8">{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
