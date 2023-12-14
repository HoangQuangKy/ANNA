import React from 'react'
import userImg from '../../../public/circle-user.png'
import searchImg from '../../../public/search .png'
import shoppingBagImg from '../../../public/shopping-bag-add.png'



function TopBar() {
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
                <button className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>TRANG CHỦ</button>
                <button className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>HÀNH TRÌNH TỬ TẾ</button>
                <button className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>SẢN PHẨM</button>
                <button className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>VỀ ANNA</button>
                <button className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>BLOG</button>
                <button className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>HỆ THỐNG CỬA HÀNG</button>
                <button className='text-sm text-gray-600 font-bold topbarItem py-3 pr-5'>LIÊN HỆ</button>
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
