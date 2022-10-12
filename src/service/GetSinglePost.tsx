import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GetSinglePost = () => {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState(true);

    const BASE_URL = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
    });

    const params = useParams();

    const getPost = async () => {
        try {
            const { data } = await BASE_URL.get(`/posts/${params.id}`);
            setData(data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getPost();
    }, []);

    return {
        data,
        loading,
    };
};

export default GetSinglePost;
