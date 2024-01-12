import TopBar from "../Common/TopBar"
import BottomBar from "../Common/BottomBar"
import payment from '../../../public/receipt.png'
function Cart() {
    return (
        <div className='flex items-center flex-col'>
            <TopBar />
            <div className='flex w-[1300px] items-center justify-center mb-32'>
                <div className="flex flex-col w-fit items-center mr-10">
                    <div className="flex w-full items-center pb-5">
                        <p className="font-semibold text-base w-[415px] p">Thông Tin Sản Phẩm</p>
                        <p className="font-semibold text-base w-[197px]">Giá</p>
                        <p className="font-semibold text-base w-[150px]">Số Lượng</p>
                        <p className="font-semibold text-base w-[120px]">Tổng Cộng</p>
                    </div>
                    <div className="flex w-full flex-col items-center border-y-2 pb-5 mb-8 border-black">
                        <div className="flex w-full items-center border-b-[1px] border-black border-dashed py-8">
                            <p className="font-semibold text-base w-[415px] p">San pham 1</p>
                            <p className="font-semibold text-base w-[197px]">Giá</p>
                            <p className="font-semibold text-base  w-[150px]">Số Lượng</p>
                            <p className="font-semibold text-base w-[120px]">Tổng Cộng</p>
                        </div>
                        <div className="flex w-full items-center border-b-[1px] border-black border-dashed py-8">
                            <p className="font-semibold text-base w-[415px] p">San pham 2</p>
                            <p className="font-semibold text-base w-[197px]">Giá</p>
                            <p className="font-semibold text-base  w-[150px]">Số Lượng</p>
                            <p className="font-semibold text-base w-[120px]">Tổng Cộng</p>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-between pb-5">
                        <div className="">
                            <button className="border bg-[#81C8C2]">
                                <p className="px-5 py-3 text-sm font-semibold text-white">Tiếp Tục Mua Hàng</p>
                            </button>
                        </div>
                        <div className="flex">
                            <div className="mr-5">
                                <button className="border bg-[#81C8C2]">
                                    <p className="px-5 py-3 text-sm font-semibold text-white">Cập Nhật Giỏ Hàng</p>
                                </button>
                            </div>
                            <div>
                                <button className="border bg-[#81C8C2]">
                                    <p className="px-5 py-3 text-sm font-semibold text-white">Xóa Toàn Bộ Giỏ Hàng</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-[24px] bg-[#F3F3F3] flex">
                    <div className="flex flex-col w-full">
                        <div className="border-b-[1px] border-black border-dashed w-full items-center flex flex-col">
                            <p className=" font-semibold text-lg pb-5">Thông tin thanh toán</p>
                        </div>
                        <div>
                            <div className="pb-5 pt-4 flex items-center justify-between border-b-[1px] border-black border-dashed">
                                <p className=" font-semibold text-lg">Tạm tính</p>
                                <p className=" font-semibold text-lg">Tạm tính</p>
                            </div>
                        </div>
                        <div>
                            <div className="pb-5 pt-4 flex items-center justify-between">
                                <p className=" font-semibold text-lg">Tổng</p>
                                <p className=" font-semibold text-lg">Tạm tính</p>
                            </div>
                        </div>
                        <div className="flex items-center flex-col px-5 py-3 border bg-[#81C8C2]">
                            <button className="flex items-center">
                                <img src={payment} alt="" width={20} height={20} />
                                <p className="text-base font-semibold text-white">Tiến hành mua hàng</p>
                            </button>
                        </div>
                        <div className="w-full flex flex-col items-center mt-5">
                            <p className="font-semibold text-base mb-3">Chúng tôi chấp nhận thanh toán</p>
                        </div>
                        <div className="w-full flex flex-col items-center mt-2">
                            <div className="flex gap-4">
                                <img src="https://kinhmatanna.com/wp-content/uploads/2022/06/image-4.jpg" alt="" />
                                <img src="https://kinhmatanna.com/wp-content/uploads/2022/06/anh_4-removebg-preview-1.jpg" alt="" />
                                <img src="https://kinhmatanna.com/wp-content/uploads/2022/06/anh_2-removebg-preview-1.jpg" alt="" />
                                <img src="https://kinhmatanna.com/wp-content/uploads/2022/06/Anh_1-removebg-preview-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <BottomBar />
        </div>
    )
}

export default Cart
