import React from 'react'
import userImg from '../../../public/circle-user.png'
import searchImg from '../../../public/search .png'
import shoppingBagImg from '../../../public/shopping-bag-add.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function TopBar() {

    const [currentPage, setCurrentPage] = useState('TRANG CHỦ');

    const handleButtonClick = (pageName) => {
        setCurrentPage(pageName);
    };

    const isCurrentPage = (pageName) => {
        return currentPage === pageName;
    };
    return (
        <div className='flex w-[1300px] min-h-[88px] items-center justify-between flex-row'>

            <div>
                <a href="">
                    <img
                        src="https://kinhmatanna.com/wp-content/uploads/2022/06/logo-anna.svg"
                        alt="logo"
                        width={65}
                        height={65}
                    />

                </a>
            </div>
            <div className='flex gap-4 pt-3'>
                <NavLink
                    to={'/'}
                    className={`text-sm text-gray-600 font-bold topbarItem py-3 pr-5 hover:text-[#81C8C2] ${isCurrentPage('TRANG CHỦ') ? 'text-[#81C8C2]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('TRANG CHỦ')}>
                    TRANG CHỦ
                </NavLink>
                <NavLink
                    to={'/hành-trình-tử-tế'}
                    className={`text-sm text-gray-600 font-bold topbarItem py-3 pr-5 hover:text-[#81C8C2] ${isCurrentPage('HÀNH TRÌNH TỬ TẾ') ? 'text-[#81C8C2]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('HÀNH TRÌNH TỬ TẾ')}>
                    HÀNH TRÌNH TỬ TẾ
                </NavLink>
                <NavLink
                    to={'/sản-phẩm'}
                    className={`text-sm text-gray-600 font-bold topbarItem py-3 pr-5 hover:text-[#81C8C2] ${isCurrentPage('SẢN PHẨM') ? 'text-[#81C8C2]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('SẢN PHẨM')}>
                    SẢN PHẨM
                </NavLink>
                <NavLink
                    to={'/về-ANNA'}
                    className={`text-sm text-gray-600 font-bold topbarItem py-3 pr-5 hover:text-[#81C8C2] ${isCurrentPage('VỀ ANNA') ? 'text-[#81C8C2]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('VỀ ANNA')}>
                    VỀ ANNA
                </NavLink>
                <NavLink
                    to={'/blog'}
                    className={`text-sm text-gray-600 font-bold topbarItem py-3 pr-5 hover:text-[#81C8C2] ${isCurrentPage('BLOG') ? 'text-[#81C8C2]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('BLOG')}>
                    BLOG
                </NavLink>
                <NavLink
                    to={'/hệ-thống-cửa-hàng'}
                    className={`text-sm text-gray-600 font-bold topbarItem py-3 pr-5 hover:text-[#81C8C2] ${isCurrentPage('HỆ THỐNG CỬA HÀNG') ? 'text-[#81C8C2]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('HỆ THỐNG CỬA HÀNG')}>
                    HỆ THỐNG CỬA HÀNG
                </NavLink>
                <NavLink
                    to={'/liên-hệ'}
                    className={`text-sm text-gray-600 font-bold topbarItem py-3 pr-5 hover:text-[#81C8C2] ${isCurrentPage('LIÊN HỆ') ? 'text-[#81C8C2]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('LIÊN HỆ')}>
                    LIÊN HỆ
                </NavLink>
            </div>
            <div className='pt-3 w-[15%] flex justify-between'>
                <button>
                    <img src={userImg}
                        alt="user icon"
                        width={30}
                        height={30} />
                </button>
                <button>
                    <img src={searchImg}
                        alt="search icon"
                        width={30}
                        height={30} />
                </button>
                <button>
                    <img src={shoppingBagImg}
                        alt="shopping bag add icon"
                        width={30}
                        height={30} />
                </button>

            </div>
        </div>
    )
}

export default TopBar
