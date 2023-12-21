import facebookIcon from "../../assets/facebook.png"
import igIcon from "../../assets/instagram.png"
import tiktokIcon from "../../assets/tik-tok.png"

const Marketing = () => {
    return (
        <div className='grid grid-cols-2 w-[1300px] gap-10 items-center h-[600px]'>
            <div className='flex flex-col w-full h-full'>
                <div className='bg-[url(https://kinhmatanna.com/wp-content/uploads//2022/08/Vector-3-1.svg)] bg-left-bottom p-8 bg-no-repeat w-full'>
                    <p className='font-bold text-3xl'>VŨ TRỤ TRUYỀN THÔNG</p>
                </div>
                <div>
                    <p>
                        Kính mắt Anna chắc không còn quá xa lạ với giới trẻ nữa. Đây là kênh thông tin mua sắm và giải trí dành cho giới trẻ, là “món ăn tinh thần” hằng ngày không thể thiếu của mỗi người trẻ.
                    </p>
                    <p className='mt-3'>
                        Được thành lập từ năm 2015, trải qua hơn 8 năm phát triển kính mắt Anna đã, đang và sẽ chiếm vị trí không thể thiếu đối với các bạn trẻ. Cập nhật thông tin thời trang nhanh chóng và phù hợp với thị hiếu của khán giả thông qua các mạng xã hội như Facebook, Tiktok, Instagram, Youtube, kính mắt Anna là lựa chọn hàng đầu cho những ai muốn tận hưởng các bài viết, video vừa mang tính giải trí mà vẫn có đầy đủ thông tin cần thiết.
                    </p>
                </div>
            </div>
            <div className='w-full relative'>
                <div className='flex items-center justify-center'>
                    <img src="https://kinhmatanna.com/wp-content/uploads/2022/08/bg-100-1024x297.jpg"
                        width={300}
                        height={300}
                        alt=""
                        className='w-[300px] h-[300px] rounded-full' />
                </div>
                <div className=' bg-gradient-to-r from-blue-400 via-blue-500 to-blue-200 w-[260px] h-[215px] absolute top-10 justify-between'>
                    <div className='p-4 flex flex-col justify-between h-full'>
                        <img src={facebookIcon} alt="" width={40} height={40} className='' />
                        <div className=''>
                            <p className=' text-sm font-medium text-white'>ANNA</p>
                            <p className=' text-sm text-white'>@kinhmatanna</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-r from-[#EA8B5F] via-[#DA5F5B] to-[#A43592] w-[260px] h-[215px] absolute bottom-44 right-12 justify-between'>
                    <div className='p-4 flex flex-col justify-between h-full'>
                        <img src={igIcon} alt="" width={40} height={40} className='' />
                        <div className=''>
                            <p className=' text-sm font-medium text-white'>ANNA</p>
                            <p className=' text-sm text-white'>@kinhmatanna</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[url(https://kinhmatanna.com/wp-content/uploads/2022/08/82bfbd7ddea61bf842b7.jpg)] bg-cover w-[260px] h-[215px] absolute top-44 right-12 justify-between'>
                    <div className='p-4 flex flex-col justify-between h-full'>
                        <img src={tiktokIcon} alt="" width={40} height={40} className='' />
                        <div className=''>
                            <p className=' text-sm font-medium text-white'>ANNA</p>
                            <p className=' text-sm text-white'>@kinhmatanna</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing
