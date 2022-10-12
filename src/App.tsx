import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';
import Home from './pages/Home';

const App: FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/post/:id" element={<SinglePost />}></Route>
            </Routes>
        </>
    );
};

export default App;
