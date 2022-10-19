import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GetSinglePost = () => {
    const [post, setPost] = useState<any>({});
    const [loading, setLoading] = useState(true);

    const BASE_URL = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    });

    const params = useParams();

    const getPost = async () => {
        try {
            const post = await BASE_URL.get(`/posts/${params.id}`);
            setPost(post.data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getPost();
    }, []);

    return {
        post,
        loading,
    };
};

export default GetSinglePost;
