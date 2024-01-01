import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import LogIn from '../components/Login';
import Address from '../components/Address/Address';
import AdminPage from '../components/Admin/AdminPage';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/hệ-thống-cửa-hàng' element={<Address />}></Route>
            <Route path='/admin' element={<AdminPage />}></Route>
        </Routes>
    );
}

export default AppRouter;