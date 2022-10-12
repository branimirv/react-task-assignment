import React from 'react';
import ButtonBack from '../components/ButtonBack';
import GetSinglePost from '../service/GetSinglePost';
import { useEffect } from 'react';

const SinglePost = () => {
    const { data, loading } = GetSinglePost();

    useEffect(() => {
        document.title = `Posts - ${data?.title}`;
    }, []);

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <div className="container relative mx-auto">
                    <ButtonBack />
                    <div className="max-w-xl mx-auto pt-[100px]">
                        <h1 className="text-6xl font-bold mb-8">
                            {data.title}
                        </h1>
                        <p>{data.body}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePost;
