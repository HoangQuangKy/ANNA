import map from "../../assets/map-marker.png"
import arrow from "../../assets/arrow-right.png"
const Adv = () => {
    return (
        <div className='flex flex-col w-[1300px] mt-2'>
            <div className='grid grid-cols-2 justify-between h-[431px] mb-2'>
                <img
                    src="https://kinhmatanna.com/wp-content/uploads/2022/10/310399478_2061890187342925_5141986880618101888_n-1024x1024.jpg"
                    alt=""
                    width={630}
                    height={400}
                    className='object-cover rounded-3xl h-[400px]' />
                <div className='flex flex-col items-center mt-24'>
                    <div className='flex flex-col items-center justify-center object-contain'>
                        <div className=' bg-[#BFE8E3] rounded-full w-[90px] h-[90px] object-contain flex items-center justify-center'>
                            <img src="https://kinhmatanna.com/wp-content/uploads//2022/07/g2.svg"
                                alt=""
                                width={50}
                                height={50}
                                className=' object-cover' />
                        </div>
                        <div className='flex flex-col items-center mt-5'>
                            <p className='text-[#81C8C2] text-3xl font-bold mb-5'>Kích thước khung</p>
                            <p className='text-lg items-center flex text-center mb-5'>
                                Lựa chọn Kích thước khung phù hợp nhất để giúp dễ dàng vừa vặn, thoải mái và tiện lợi cho bạn.
                            </p>
                            <div className='flex items-center'>
                                <p className='font-bold pr-5'>Cách đo kích thước khung hình của bạn</p>
                                <img src={arrow} alt="" width={25} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 justify-between h-[431px]'>
                <div className='flex flex-col items-center mt-24'>
                    <div className='flex flex-col items-center justify-center object-contain'>
                        <div className=' bg-[#BFE8E3] rounded-full w-[90px] h-[90px] object-contain flex items-center justify-center'>
                            <img src="https://kinhmatanna.com/wp-content/uploads//2022/07/g1.svg"
                                alt=""
                                width={50}
                                height={50}
                                className=' object-contain' />
                        </div>
                        <div className='flex flex-col items-center mt-5'>
                            <p className='text-[#81C8C2] text-3xl font-bold mb-5'>Đo ống kính</p>
                            <p className='text-lg items-center flex text-center mb-5'>
                                Chúng tôi sẽ giới thiệu các loại ống kính tốt nhất dựa trên đơn thuốc của bạn. Để đặt mua kính, bạn cũng sẽ cần Khoảng cách đồng tử (PD).
                            </p>
                            <div className='flex items-center'>
                                <p className='font-bold pr-5'>Cách đo kích thước PD của bạn</p>
                                <img src={arrow} alt="" width={25} height={50} />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src='https://kinhmatanna.com/wp-content/uploads/2022/06/Rectangle-37.jpg'
                    alt=""
                    width={630}
                    height={630}
                    className='object-cover rounded-3xl h-full ml-5' />
            </div>

            <div className='flex w-[1300px] justify-between flex-row mt-10 mb-5'>
                <div className='bg-[url(https://kinhmatanna.com/wp-content/uploads//2022/08/Vector-3-1.svg)] bg-center bg-cover'>
                    <p className='text-base mb-3'>ĐỊA ĐIỂM</p>
                    <p className='font-bold text-3xl'>HỆ THỐNG CỬA HÀNG</p>
                </div>
                <div>
                    <button className='flex bg-black text-white py-3 px-6 rounded-xl items-center justify-center'>
                        <img src={map} alt="" width={20} height={20} />
                        <p className='font-medium ml-2'>Tìm kiếm cơ sở</p>
                    </button>
                </div>

            </div>

            <div className='flex w-[1300px] items-center justify-center h-[600px] mt-5 mb-20'>
                <img src="https://kinhmatanna.com/wp-content/uploads/2022/10/Untitled-1-1024x1013.png" alt="" className='object-cover w-[760px] h-full mr-5' />
                <img src="https://kinhmatanna.com/wp-content/uploads/2022/10/756daa592822ed7cb433-576x1024.jpg" alt="" className='object-cover w-[500px] h-full' />
            </div>
        </div>
    )
}

export default Adv
