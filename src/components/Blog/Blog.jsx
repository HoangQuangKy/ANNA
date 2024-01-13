import Layout from "../Layout"

const Blog = () => {
    return (
        <div>
            <Layout style='null'>
                <div className="w-full bg-[url('/public/BG-for-anna.jpeg')] bg-cover h-[523px] flex items-end">
                    <div className=" flex flex-col container mx-32 mb-[80px] p-[10px]">
                        <div className="mb-[20px]">
                            <h1 className="text-5xl font-semibold text-white">BLOG</h1>
                        </div>
                        <div className="text-sm font-semibold text-white">
                            <div className=" flex flex-nowrap gap-[16px]">
                                <span>Trang chủ</span> <span>•</span> <a href="/ve-anna">Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-32">

                </div>
            </Layout>
        </div>
    )
}

export default Blog