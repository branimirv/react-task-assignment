import React, { useEffect } from 'react';

const Search = ({
    props,
    posts,
    setSearchResults,
}: {
    props: any;
    posts: any;
    setSearchResults: any;
}) => {
    const handleSubmit = (e: any) => e.preventDefault();

    const handleSearchChange = (e: any) => {
        if (!e.target.value) return setSearchResults(posts);

        const resultsArray = posts?.filter(
            (post: any) =>
                post.title.includes(e.target.value) ||
                post.body.includes(e.target.value)
        );

        setSearchResults(resultsArray);
    };

    props = {
        name: '<Search/>',
    };

    useEffect(() => {
        console.log(`Hello from: ${props.name}`);
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleSearchChange}
                    placeholder="Search for posts"
                />
            </form>
        </div>
    );
};

export default Search;
