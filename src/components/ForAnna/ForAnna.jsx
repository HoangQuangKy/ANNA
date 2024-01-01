import Layout from "../../components/Layout"
import Marketing from "../../components/Home/Marketing"
import Carousel from "./Carousel/Carousel";
const ForAnna = () => {
    const images = [
        {
            src: '/public/carousel/img-1.jpeg',
            name: 'Khánh Huyền'
        },
        {
            src: '/public/carousel/img-2.jpeg',
            name: 'Ngọc Matcha'
        },
        {
            src: '/public/carousel/img-3.webp',
            name: 'Trần Vân'
        },
        {
            src: '/public/carousel/img-4.jpeg',
            name: 'Bảo An & Gia Khiêm'
        },
        {
            src: '/public/carousel/img-5.jpeg',
            name: 'Vanh'
        }
    ];
    return (
        <Layout>
            <div className="w-full bg-[url('/public/BG-for-anna.jpeg')] bg-cover h-[523px] flex items-end">
                <div className=" flex flex-col container mx-32 mb-[80px] p-[10px]">
                    <div className="mb-[20px]">
                        <h1 className="text-5xl font-semibold text-white">LỜI CẢM ƠN</h1>
                    </div>
                    <div className="text-sm font-semibold text-white">
                        <div className=" flex flex-nowrap gap-[16px]">
                            <span>Trang chủ</span> <span>•</span> <a href="/ve-anna">For Anna</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-[110px]">
                <div className="container mx-32 flex flex-nowrap gap-[25px]">
                    <div className="p-[10px] flex flex-nowrap gap-[25px]">
                        <div>
                            <img src="/public/Tks-img-1.jpeg" alt="image" />
                        </div>
                        <div className="mt-[108px]">
                            <img src="/public/Tks-img-2.jpeg" alt="image" />
                        </div>
                    </div>
                    <div className="pt-[108px]">
                        <p className="text-4xl font-semibold">
                            CẢM ƠN VÌ BẠN ĐÃ LỰA CHỌN<br /> CHÚNG TÔI
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-[110px]">
                <div className="container mx-32 flex flex-nowrap gap-[25px]">
                    <div className="mt-[108px] w-[40%]">
                        <p className="text-4xl font-semibold">HỆ THỐNG CỬA HÀNG KÍNH MẮT</p>
                    </div>
                    <div>
                        <img src="/public/for-anna-img.jpeg" alt="image" />
                    </div>
                </div>
            </div>
            <div className="w-full mt-[110px]">
                <div className="container mx-32">
                    <Marketing />
                </div>
            </div>
            <div className="w-full mt-[110px]">
                <div className="container mx-32">
                    <Carousel images={images}/>
                </div>
            </div>
        </Layout>
    )
}

export default ForAnna
