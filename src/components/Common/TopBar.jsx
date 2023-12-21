import React from 'react'

function TopBar() {
    return (
        <div className='flex items-center justify-between flex-row'>

            <img
                src="https://kinhmatanna.com/wp-content/uploads/2022/06/logo-anna.svg"
                alt="logo"
                width={65}
                height={65} />

            <div className='flex gap-4'>
                <button className='text-sm text-gray-600 font-bold topbarItem'>TRANG CHỦ</button>
                <button className='text-sm text-gray-600 font-bold topbarItem'>HÀNH TRÌNH TỬ TẾ</button>
                <button className='text-sm text-gray-600 font-bold topbarItem'>SẢN PHẨM</button>
                <button className='text-sm text-gray-600 font-bold topbarItem'>VỀ ANNA</button>
                <button className='text-sm text-gray-600 font-bold topbarItem'>BLOG</button>
                <button className='text-sm text-gray-600 font-bold topbarItem'>HỆ THỐNG CỬA HÀNG</button>
                <button className='text-sm text-gray-600 font-bold topbarItem'>LIÊN HỆ</button>
            </div>
        </div>
    )
}

export default TopBar
