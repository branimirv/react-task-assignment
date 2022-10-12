import React, { useEffect, useState } from 'react';
import GetPosts from '../service/GetPosts';
import Search from '../components/Search';

import '../App.css';
import ButtonBack from '../components/ButtonBack';
import ListPage from '../components/ListPage';

const Posts = (props: any) => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [searchResults, setSearchResults] = useState<any>([]);

    useEffect(() => {
        document.title = 'Posts';
        GetPosts().then((data: any) => {
            const posts = data.posts;
            const comments = data.comments;

            setPosts(posts);
            setComments(comments);
            setSearchResults(posts);

            return posts;
        });
    }, []);

    return (
        <div>
            <div className="container mx-auto relative">
                <ButtonBack></ButtonBack>
                <div className="flex justify-center pt-[100px]">
                    <h1 className="text-5xl">All Posts</h1>
                </div>
                <Search
                    props={props}
                    posts={posts}
                    setSearchResults={setSearchResults}
                />
                <ListPage
                    props={props}
                    comments={comments}
                    searchResults={searchResults}
                />
            </div>
        </div>
    );
};

export default Posts;
