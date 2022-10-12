import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = (props: any) => {
    props = {
        name: '<Header/>',
    };

    useEffect(() => {
        console.log(`Hello from: ${props.name}`);
    }, []);
    return (
        <>
            <header>
                <div className="container relative md:container md:mx-auto">
                    <div className="flex justify-between items-center py-[100px]">
                        <h2 className="text-5xl font-bold">Q-task</h2>
                        <Link className="hover:underline" to={'/posts'}>
                            All Posts
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
