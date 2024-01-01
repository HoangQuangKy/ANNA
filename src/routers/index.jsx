import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import LogIn from '../components/Login';
import Address from '../components/Address/Address';
import ForAnna from '../components/ForAnna/ForAnna';
import KindJourney from '../components/KindJourney/KindJourney';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/hệ-thống-cửa-hàng' element={<Address />}></Route>
            <Route path='/hanh-trnh-tu-te' element={<KindJourney />} />
            <Route path='/ve-anna' element={<ForAnna />} />
        </Routes>
    );
}

export default AppRouter;