import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import LogIn from '../components/Login';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
        </Routes>
    );
}

export default AppRouter;