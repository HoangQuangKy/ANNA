import { useState } from "react";
import Layout from "../Layout"
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'
import Draggable from 'react-draggable';
import { Resizable } from 'react-resizable';
const KindJourney = () => {
    const [showMore, setShowMore] = useState(false)
    const hiddenText = () => (
        setShowMore(false)
    )
    const showText = () => (
        setShowMore(true)
    )

    const [isHovered, setIsHovered] = useState(null);

    const handleResize = (event, { size }) => {
        console.log(size);
    };
    return (
        <Layout>
            <div className="w-full bg-[url('/public/BG.png')] bg-cover ">
                <div className=" flex min-h-[65vh] flex-col container mx-32">
                    <div className="pt-[128px]">
                        <img src="/public/Layer_1-5.svg" />
                    </div>
                    <div className="mt-[16px] mb-[64px]">
                        <p className="text-lg">Hành Trình Tử Tế là một dự án <span className="text-sky-400">thiện nguyện vì cộng đồng</span>, được phát triển bởi Kính mắt Anna – Thương hiệu<br /> Kính mắt của Sự Tử Tế.</p>
                        <p className="text-lg">Với thông điệp: <span className="text-sky-400">Tử tế từ những điều nhỏ nhất</span>, mỗi đơn hàng của các bạn tại Kính mắt Anna, đồng nghĩa với <br />việc các bạn đang cùng chúng mình bước đi trên <span className="text-sky-400">Hành Trình Tử Tế</span>, mang những đôi mắt sáng đến mọi miền <br /> đất nước và lan toả những giá trị tốt đẹp đến cộng đồng.</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-[64px]">
                <Player>
                    <source src="public/Nau-an-cho-em.mp4" />
                </Player>
            </div>
            <div className=" pt-[150px]">
                <div className="container mx-32 bg-[url('/public/BG_2.png')] bg-cover w-auto rounded-3xl">
                    <div className="p-[64px] space-x-0 flex justify-between">
                        <div>
                            <div className="text-5xl font-bold text-white pb-[16px]">
                                Các Hoạt Động Chính
                            </div>
                            <div className="text-xl text-white">
                                ”Hành Trình Tử Tế” được khởi hành với 3 nhóm hoạt động chính
                            </div>
                        </div>
                        <div className="border border-white rounded-full h-fit p-[16px] text-white cursor-pointer">
                            Cộng đồng sống tử tế
                        </div>
                    </div>
                    <hr className="border-white" />
                    <div className="flex p-[64px] gap-[30px]">
                        <div className="w-[50%] bg-[#F8F8F8] p-[32px] rounded-2xl">
                            <div className="text-3xl font-bold hover:text-cyan-300 pb-[20px]">
                                Đôi Mắt Mặt Trời
                            </div>
                            <hr />
                            <div className="text-xl hover:text-cyan-300 pt-[20px] pb-[72px]">
                                Tài trợ các ca mổ mắt dị tật bẩm sinh cho các em <br /> nhỏ có hoàn cảnh khó khăn
                            </div>
                            <div>
                                <img src="/public/img-1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-[50%] bg-[#F8F8F8] p-[32px] rounded-2xl">
                            <div className="text-3xl font-bold hover:text-cyan-300 pb-[20px]">
                                Túi Tử Tế
                            </div>
                            <hr />
                            <div className="text-xl hover:text-cyan-300 pt-[20px] pb-[72px]">
                                Anna sẻ in 500.000 chiếc túi tử tế nhằm làn tỏa câu <br /> chuyện tìm người thân thất lạc, cùng hi vọng phép <br /> màu sẻ xảy ra
                            </div>
                            <div>
                                <img src="/public/img-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-32 mt-[103px] mb-[128px] w-auto">
                <div>
                    <p className="text-sm font-bold text-slate-400 p-[10px]">✦ TƯƠNG THÂN</p>
                    <p className="text-3xl font-medium">Hy vọng rằng với những bước chân nối dài của chúng<br /> ta, <span className="text-teal-500">“Hành Trình Tử Tế by Anna”</span> sẽ luôn rộng mở soi sáng<br /> cho các mảnh đời còn đang chìm trong bóng tối.</p>
                </div>
                <div>
                    <div className="flex justify-evenly mt-[56px]">
                        <div>
                            <div className="text-8xl font-bold text-teal-500 text-center">
                                30
                            </div>
                            <div className="text-3xl font-bold text-center">
                                EM NHỎ
                            </div>
                            <div className="text-base text-center">
                                Được tài trợ chi phí<br /> phẩu thuật mắt
                            </div>
                        </div>
                        <div>
                            <div className="text-8xl font-bold text-teal-500 text-center">
                                500.000
                            </div>
                            <div className="text-3xl font-bold text-center">
                                TÚI TỬ TẾ
                            </div>
                            <div className="text-base text-center">
                                Được phát tặng để tìm<br /> người thân thất lạc
                            </div>
                        </div>
                        <div>
                            <div className="text-8xl font-bold text-teal-500 text-center">
                                1.046
                            </div>
                            <div className="text-3xl font-bold text-center">
                                LƯỢT CHIA SẺ
                            </div>
                            <div className="text-base text-center">
                                Các câu chuyện của<br /> Hành trình Tử tế
                            </div>
                        </div>
                        <div>
                            <div className="text-8xl font-bold text-teal-500 text-center">
                                07
                            </div>
                            <div className="text-3xl font-bold text-center">
                                TỈNH THÀNH
                            </div>
                            <div className="text-base text-center">
                                Hành trình Tử tế có mặt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-32">
                <div>
                    <p className="text-6xl font-bold text-teal-500 mb-[60px]">Những Bước Chân Đồng Hành</p>
                </div>
                <div className="w-[330px]">
                    <div>
                        <img src="/public/img3.png" alt="" />
                    </div>
                    <div className="text-3xl font-bold text-teal-500">
                        Tun Phạm
                    </div>
                    <div className="text-lg font-semibold">
                        Nhà sáng tạo nội dung/Diễn giả/Người truyền cảm hứng
                    </div>
                    <div style={showMore ? { height: 'auto' } : { height: '50px', overflow: 'hidden' }}>
                        Tun Phạm tên thật Phạm Đức Huy (26 tuổi) hiện được biết tới là một trong những nhà sáng tạo nội dung có sức ảnh hưởng rất lớn với giới trẻ sở hữu hơn 6 triệu lượt theo dõi trên các nền tảng MXH, và qua series podcast “Đắp chăn nằm nghe Tun kể” Tun Phạm hiện đang trở thành một diễn giả, người truyền cảm hứng được giới trẻ yêu thích.
                    </div>
                    <div style={showMore ? { display: 'none' } : { display: 'block', textAlign: 'end' }}>
                        <button onClick={showText} className="text-teal-500 font-semibold">Xem thêm</button>
                    </div>
                    <div style={showMore ? { display: 'block', textAlign: 'end' } : { display: 'none' }}>
                        <button onClick={hiddenText} className="text-teal-500 font-semibold">Ẩn Bớt</button>
                    </div>
                </div>
            </div>
            <div className="w-full mt-[100px] h-full">
                <div>
                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <p className="text-5xl font-sembold ">Cảm ơn các bạn đã bước cùng chúng mình trên</p>
                            <p className="text-5xl font-sembold text-teal-500">Hành trình tử tế</p>
                        </div>
                        <div>
                            <img src="/public/Vector-39.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="grid grid-cols-6 grid-rows-3 gap-1">
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(1)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 1 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-1.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/18.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(2)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 2 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-1.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/17.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(3)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 3 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-2.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/16.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(4)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 4 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-2.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/15.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(5)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 5 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-3.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/14.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(6)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 6 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-3.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/13.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(7)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 7 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-4.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/12.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(8)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 8 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-4.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/11.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(9)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 9 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-5.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/10.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(10)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 10 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-5.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/9.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(11)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 11 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-6.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/8.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(12)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 12 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-6.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/7.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(13)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 13 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-7.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/6.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(14)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 14 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-7.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/5.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(15)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 15 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-8.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/4.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(16)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 16 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-8.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/3.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(17)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 17 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-9.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/2.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                        <div>
                            <Draggable>
                                <Resizable
                                    width={200}
                                    height={200}
                                    onResize={handleResize}
                                    draggableOpts={{ grid: [20, 20] }}
                                >
                                    <div
                                        onMouseEnter={() => setIsHovered(18)}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        {isHovered === 18 ? (
                                            <div className="flip-vertical-right">
                                                <img
                                                    src="/public/flipImg/flip-9.png"
                                                    alt="Another Image"
                                                    style={{ width: '100%', height: '100%' }}
                                                />
                                            </div>
                                        ) : (
                                            <div>
                                                <img
                                                    src="/public/flipImg/cutimage/1.jpg"
                                                    alt="Default Image"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Resizable>
                            </Draggable>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-around mt-20 bg-[url("/public/BG-footer.jpeg")]'>
                    <div className='flex flex-col'>
                        <p>Kết nối yêu thương</p>
                        <a href="tel:0888071297">Liện hệ: 0888.071.297</a>
                        <a href="mailto:kinhmatanna@gmail.com">Email: kinhmatanna@gmail.com</a>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>
                            <p>Địa điểm: </p>
                            <p>Dự kiến 30.000+ học sinh bản CAO và XA khó khăn trong hơn 60 xã<br/> thuộc 7 huyện khó nhất của tỉnh Điện Biên: Huyện Mường Nhé,<br/> huyện Nậm Pồ, huyện Điện Biên Đông và Mường Chà, Tủa Chùa ,<br/> Mường Ảng, TP.Điện Biên Phủ, Huyện Điện Biên.</p>
                            <p>-Tỉnh Cao Bằng: Huyện Bảo Lâm</p>
                            <p>-Tỉnh Gia Lai</p>
                            <p>-Tỉnh Đắk Lắk</p>
                        </div>
                    </div>
            </div>
        </Layout>
    )
}

export default KindJourney
