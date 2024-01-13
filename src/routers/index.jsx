import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import LogIn from '../components/Login';
import Address from '../components/Address/Address';
import ForAnna from '../components/ForAnna/ForAnna';
import KindJourney from '../components/KindJourney/KindJourney';
import AdminPage from '../components/Admin/AdminPage';
import Cart from '../components/Cart/Cart';
import Blog from '../components/Blog/Blog';
import Payment from '../components/Payment/Payment';

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/hệ-thống-cửa-hàng' element={<Address />}></Route>
            <Route path='/hanh-trinh-tu-te' element={<KindJourney />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/thanh-toan' element={<Payment />} />
            <Route path='/ve-anna' element={<ForAnna />} />
            <Route path='/admin/*' element={<AdminPage />}></Route>
            <Route path='/gio-hang' element={<Cart />}></Route>
        </Routes>
    );
}

export default AppRouter;