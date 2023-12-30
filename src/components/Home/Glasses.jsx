import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


const Glasses = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='flex w-[1300px] justify-start flex-col mt-2'>
            <div className="flex">
                <div className='relative mb-20'>
                    <img src="https://kinhmatanna.com/wp-content/uploads/2023/04/261kb-1024x643.jpg"
                        alt=""
                        width={635}
                        height={398}
                        className='rounded-3xl h-[398px]' />
                    <div className='absolute bottom-[50px] left-[230px] '>
                        <button className=' text-slate-50 bg-black px-4 py-2 rounded-lg font-medium text-base hover:bg-[#81C8C2]'>CHỌN KÍNH NGAY</button>
                    </div>
                </div>

                <Swiper
                    spaceBetween={10}
                    navigation
                    slidesPerView={2}
                    className='flex items-center w-[650px] ml-2'
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <img src="https://kinhmatanna.com/wp-content/uploads/2023/04/Untitled-4-01-01-02-768x983.jpg"
                            alt=""
                            className='rounded-3xl w-[315px] h-[398px] object-fit' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://kinhmatanna.com/wp-content/uploads/2023/04/Untitled-4-01-01-03-768x983.jpg"
                            alt=""
                            className='rounded-3xl w-[315px] h-[398px] object-fit' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://kinhmatanna.com/wp-content/uploads/2023/04/Untitled-4-01-01-05-768x983.jpg"
                            alt=""
                            className='rounded-3xl w-[315px] h-[398px] object-fit' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://kinhmatanna.com/wp-content/uploads/2023/04/Untitled-4-01-01-06-768x983.jpg"
                            alt=""
                            className='rounded-3xl w-[315px] h-[398px] object-fit' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="	https://kinhmatanna.com/wp-content/uploads/2023/04/Untitled-4-01-01-04-768x983.jpg"
                            alt=""
                            className='rounded-3xl w-[315px] h-[398px] object-fit' />
                    </SwiperSlide>
                </Swiper>
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
