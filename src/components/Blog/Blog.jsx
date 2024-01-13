import Layout from "../Layout"
import { Card } from "antd"
import {data} from '../../../fakeData/fakeData'

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
                <div className="container mx-32 flex flex-wrap gap-5 mt-10">
                    {data.map(i => (
                        <a key={i.source.id} className="w-1/5" href={i.url} target="blank">
                            <Card  title={i.title} className="mb-5 w-full" cover={<img alt="example" src={i.urlToImage}/>}>
                                <p>{i.content}</p>
                            </Card>
                        </a>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default Blog