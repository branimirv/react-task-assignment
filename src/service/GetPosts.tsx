import axios from 'axios';

const BASE_URL = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getPosts = async () => {
    try {
        const posts = await BASE_URL.get('/posts');
        const comments = await BASE_URL.get('/comments');

        return { posts: posts.data, comments: comments.data };
    } catch (error) {
        console.error(error);
    }
};

export default getPosts;
