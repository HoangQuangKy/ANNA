import React from 'react'
import eyeIcon from '../../../public/eye.png'
import refreshIcon from '../../../public/refresh.png'
import shieldCheckIcon from '../../../public/shield-check.png'
import sprayIcon from '../../../public/spray-can.png'
import checkIcon from '../../../public/check.png'
import facebookIcon from '../../../public/facebook.png'
import igIcon from '../../../public/instagram.png'
import tiktokIcon from '../../../public/tik-tok.png'

function BottomBar() {
    return (
        <div className='flex w-full min-h-[88px] flex-col items-center'>
            <div className='flex w-full min-h-[88px] flex-col items-center bg-gray-100'>
                <div className='flex w-[1300px] min-h-[113px] flex-row justify-between items-center'>
                    <div>
                        <img src="https://kinhmatanna.com/wp-content/uploads/2022/06/anna-text.svg"
                            alt="Anna Text"
                            className=' object-contain'
                            width={150}
                            height={28} />
                    </div>
                    <div className='flex flex-row items-center justify-between gap-10'>
                        <a href="" className='flex items-center gap-2.5'>
                            <img src={shieldCheckIcon}
                                alt="warranty"
                                width={25}
                                height={25} />
                            <p className=' text-gray-600 topbarItem font-normal'>Chính sách bảo hành</p>
                        </a>
                        <a href="" className='flex items-center gap-2.5'>
                            <img src={eyeIcon} alt="Eye"
                                width={25}
                                height={25} />
                            <p className=' text-gray-600 topbarItem font-normal'>Khám mắt miễn phí</p>
                        </a>
                        <a href="" className='flex items-center gap-2.5'>
                            <img src={refreshIcon} alt="refresh"
                                width={25}
                                height={25} />
                            <p className=' text-gray-600 topbarItem font-normal'>Thu cũ đổi mới</p>
                        </a>
                        <a href="" className='flex items-center gap-2.5'>
                            <img src={sprayIcon} alt="shield"
                                width={25}
                                height={25} />
                            <p className=' text-gray-600 topbarItem font-normal'>Vệ sinh & bảo quản kính mắt</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-6 w-[1300px] flex-row justify-between mt-5'>
                <div className='flex flex-col items-start'>
                    <p className='text-lg font-bold	pb-2'>
                        Tất cả sản phẩm
                    </p>
                    <ul>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Gọng Kính</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Tròng Kính</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Kính Râm</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Phụ Kiện</p>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-start'>
                    <p className='text-lg font-bold	pb-2'>
                        Chính sách mua hàng
                    </p>
                    <ul>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Hình thức thanh toán</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Chính sách giao hàng</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Chính sách bảo hành</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Chính sách bảo mật</p>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-start'>
                    <p className='text-lg font-bold	pb-2'>
                        Thông tin liên hệ
                    </p>
                    <ul>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Hotline: 1900 0359</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Email: marketing@kinhmatanna.com</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Trụ Sở: Số 75A, Ngách 139/27 Nguyễn Ngọc Vũ, Tổ 30, P. Trung Hoà, Q. Cầu Giấy, Hà Nội</p>
                        </li>
                        <li className='flex flex-row mt-3'>
                            <img src={facebookIcon} alt="" width={25} height={25} className='object-contain mr-3' />
                            <img src={igIcon} alt="" width={25} height={25} className='object-contain mr-3' />
                            <img src={tiktokIcon} alt="" width={25} height={25} className='object-contain mr-3' />
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col items-start'>
                    <p className='text-lg font-bold	pb-2'>
                        Về Anna
                    </p>
                    <ul>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Giới Thiệu</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Liên Hệ</p>
                        </li>
                        <li className='flex flex-row'>
                            <img src={checkIcon} alt=""
                                width={15}
                                height={15}
                                className=' object-contain mr-2' />
                            <p className='pb-0.5'>Hệ Thống Cửa Hàng</p>
                        </li>
                        <li>
                            <img
                                src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=ac562aa7-f8b0-4969-bb30-020765b23da9"
                                alt=""
                                className='mt-2' />
                        </li>
                        <li>
                            <img
                                alt=""
                                src='https://kinhmatanna.com/wp-content/uploads/2022/06/logoSaleNoti.png'
                                className='mt-2'
                                width={150} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BottomBar
