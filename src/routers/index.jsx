import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import LogIn from '../components/Login';
import Address from '../components/Address/Address';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/address' element={<Address />}></Route>
        </Routes>
    );
}

export default AppRouter;