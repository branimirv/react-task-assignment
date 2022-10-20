import React, { useEffect } from 'react';
import Post from './Post';

const ListPage = ({
    props,
    searchResults,
    comments,
}: {
    props: any;
    searchResults: any;
    comments: any;
}) => {
    props = {
        name: '<ListPage/>',
    };

    useEffect(() => {
        console.log(`Hello from: ${props.name}`);
    }, []);

    const getPostsAndComments = searchResults.map((post: any) => {
        const filteredComments = comments.filter(
            (comment: any) => comment.postId === post.id
        );

        return (
            <Post
                key={post.id}
                props={props}
                post={post}
                filteredComments={filteredComments}
            />
        );
    });

    return getPostsAndComments.length ? (
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 mt-8">
            {getPostsAndComments}
        </div>
    ) : (
        <div>sorry, no posts found</div>
    );
};

export default ListPage;
