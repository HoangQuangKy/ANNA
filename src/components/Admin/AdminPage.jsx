import React from 'react'
import CreateUser from './CreateUser';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd'
import {
    UserOutlined,
    HomeOutlined,
    VideoCameraOutlined,
    UserAddOutlined,
    UserSwitchOutlined,
    ExclamationCircleOutlined,
    VideoCameraAddOutlined,
    SwitcherOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const items1 = [
    { key: '2', label: 'Logout', icon: <LogoutOutlined /> }
];

const items = [
    { key: '1', label: 'Administrator', icon: <HomeOutlined /> },
    {
        key: 'sub1',
        label: 'Quản lí tài khoản',
        icon: <UserOutlined />,
        children: [
            { key: '2', label: 'Thêm tài khoản', icon: <UserAddOutlined />, path: 'create_user' },
            { key: '4', label: 'Thay đổi thông tin tài khoản', icon: <UserSwitchOutlined />, path: 'update_user' },
            { key: '5', label: 'Danh sách tài khoản', icon: <ExclamationCircleOutlined />, path: 'manage_user' }
        ]
    },
    {
        key: 'sub2',
        label: 'Quản lí sản phẩm',
        icon: <VideoCameraOutlined />,
        children: [
            { key: '6', label: 'Thêm sản phẩm mới', icon: <VideoCameraAddOutlined />, path: 'create_product' },
            { key: '8', label: 'Thay đổi thông tin phim', icon: <SwitcherOutlined />, path: 'manage_product' }
        ]
    },
    {
        key: 'sub3',
        label: 'Quản lí hệ thống cửa hàng',
        icon: <VideoCameraOutlined />,
        children: [
            { key: '9', label: 'Thêm cửa hàng mới', icon: <VideoCameraAddOutlined />, path: 'create_store' },
            { key: '10', label: 'Thông tin cửa hàng', icon: <SwitcherOutlined />, path: 'manage_store' },

        ]
    },
    {
        key: 'sub4',
        label: 'Quản lí bài viết',
        icon: <VideoCameraOutlined />,
        children: [
            { key: '11', label: 'Thêm bài viết mới', icon: <VideoCameraAddOutlined />, path: 'create_blog' },
            { key: '12', label: 'Thông tin bài viết', icon: <SwitcherOutlined />, path: 'manage_blog' },

        ]
    }
];

function AdminPage() {
    const location = useLocation();

    return (
        <div className='w-full h-[100vh] flex flex-row bg-white'>
            <div className='w-[280px] h-[100vh] bg-black pt-5 flex flex-col pb-5 justify-between'>
                <div>
                    {items.map(item => (
                        <Menu key={item.key} icon={item.icon} theme='dark' mode="inline" defaultOpenKeys={['sub1']} className='w-[280px] text-base flex px-1 mt-5'>
                            {item.children ? (
                                <Menu.SubMenu key={item.key} title={item.label} className='w-[275px]'>
                                    {item.children.map(child => (
                                        <Menu.Item key={child.key} icon={child.icon} className='w-[275px]' selected={location.pathname.includes(child.path)}>
                                            {/* <Link to={`/admin/${child.path}`}>{child.label}</Link> */}
                                            <div>{child.label}</div>
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            ) : (
                                <Menu.Item key={item.key} icon={item.icon} selected={location.pathname.includes(item.path)}>
                                    {/* <Link to={`/admin/${item.path}`}>{item.label}</Link> */}
                                    <div>{item.label}</div>
                                </Menu.Item>
                            )}
                        </Menu>
                    ))}
                </div>
                <Menu
                    className='w-[256px]'
                    mode='inline'
                    theme='dark'
                >
                    {items1.map(item => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
            {/* <Routes>
                <Route path='create_film' element={<CreateUser />} />
                <Route path='manage_film' />
                <Route path={`editfilm/:_id`} />
                <Route path='create_user'></Route>
                <Route path={`update_user/:_id`}></Route>
                <Route path='manage_user'></Route>
            </Routes> */}
        </div >
    )
}

export default AdminPage
