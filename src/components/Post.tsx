import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = ({
    props,
    post,
    filteredComments,
}: {
    props: any;
    post: any;
    filteredComments: any;
}) => {
    props = {
        name: '<Post/>',
    };

    useEffect(() => {
        console.log(`Hello from: ${props.name}`);
    }, []);

    return (
        <Link to={`/post/${post.id}`} className="post block">
            <h1 className="text-2xl font-bold">
                #{post.id} {post.title}
            </h1>
            <p className="mt-4">{post.body}</p>
            <h3 className="font-bold">Comments:</h3>
            {filteredComments.map((comment: any) => (
                <div key={comment.id}>
                    <div className="text-sm">
                        <span className="text-sm font-bold">Comment name:</span>{' '}
                        {comment.name}
                    </div>
                    <div className="text-sm">
                        <span className="text-sm font-bold">
                            Comment email:
                        </span>{' '}
                        {comment.email}
                    </div>
                    <div>
                        <span className="text-sm font-bold">
                            Comment message:
                        </span>{' '}
                        <p>{comment.body}</p>
                    </div>
                </div>
            ))}
        </Link>
    );
};

export default Post;
