import React from 'react'

function Glasses() {
    return (
        <div className='flex w-[1300px] justify-start flex-col mt-2'>
            <div className='relative mb-20'>
                <img src="https://kinhmatanna.com/wp-content/uploads/2023/04/261kb-1024x643.jpg"
                    alt=""
                    width={635}
                    height={400}
                    className='rounded-3xl' />
                <div className='absolute bottom-[50px] left-[230px] '>
                    <button className=' text-slate-50 bg-black px-4 py-2 rounded-lg font-medium text-base'>CHỌN KÍNH NGAY</button>
                </div>
            </div>
            <div>
                <div className='h-[115px] bg-[#81c8c2] px-5 py-5 rounded-t-3xl'>
                    <p className='text-4xl text-white font-bold'>
                        SĂN FLASH SALE
                    </p>
                    <p className='text-white'>Hàng trăm sản phẩm bắt trend mới nhất</p>
                </div>
                <div className='h-[395px] bg-[#BFE8E3] rounded-b-3xl mb-20'>
                    Hello
                </div>
            </div>
        </div>
    )
}

export default Glasses
