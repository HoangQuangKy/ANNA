import React from 'react'
import TopBar from '../Common/TopBar'
import BottomBar from '../Common/BottomBar'

function LogIn() {
    return (
        <div className='flex flex-col items-center'>
            <TopBar />
            <div className='mt-[120px]'>
                <div className='xl:flex justify-evenly sm:block xl:w-[1300px] sm:w-[100%] min-h-[500px] items-center justify-between flex-row'>
                    <div className='md:w-[520px] sm:w-[400px]'>
                        <img src="../../public/BG-login.jpeg" alt="BG" />
                    </div>
                    <div>
                        <p className='text-3xl font-bold text-center'> Đăng nhập </p>
                        <p className='text-base font-normal text-center'> Hãy đăng nhập để được hưởng đặc quyền riêng dành cho bạn </p>
                        <div>
                            <p className='text-base font-bold'> Tài khoản </p>
                            <input type="text" className='w-full h-[40px] border-solid border rounded-[10px] p-2'/>
                        </div>
                        <div>
                            <p className='text-base font-bold'> Mật khẩu </p>
                            <input type="password" className='w-full h-[40px] border-solid border rounded-[10px] p-2'/>
                        </div>
                        <input type="checkbox" /> <span> Lưu tài khoản</span><br />
                        <button type='submit' className='bg-emerald-300 hover:bg-orange-700 w-full text-white font-bold py-2 px-4 rounded-[10px]'>Đăng nhập</button>
                        <div>Quên mật khẩu?</div>
                        <button type='submit' className='bg-blue-500 w-full text-white font-bold py-2 px-4 rounded-[10px] mb-2 mt-2'>Đăng nhập bằng <>Facebook</></button>
                        <button type='submit' className='bg-white-500 w-full text-slate-400 font-bold py-2 px-4 border-solid border rounded-[10px]'>Đăng nhập bằng <>Google</></button>
                        <p className='text-center'>Bạn chưa có tài khoản Anna?</p>
                        <a href="" className='text-center'>Đăng ký ngay</a>
                    </div>
                </div>
            </div>
            <BottomBar />
        </div >
    )
}

export default LogIn
