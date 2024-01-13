import Layout from "../Layout"
import { Card, Typography, Input, TextArea } from 'antd'


const Payment = () => {


    return (
        <div>
            <Layout>
                <div className="container mx-40 flex flex-warap">
                    <Card className="w-1/2 border-none m-10">
                        <Typography.Title
                            level={1}
                            style={{
                                margin: 0,
                            }}
                        >
                            THANH TOÁN
                        </Typography.Title>
                        <Input className="mt-5" size="large" placeholder="Họ tên của bạn" />
                        <Input className="mt-5" size="large" placeholder="Số điện thoại của bạn" />
                        <Input className="mt-5" size="large" placeholder="Email của bạn" />
                        <Input className="mt-5" size="large" placeholder="Tỉnh/Thành phố" />
                        <Input className="mt-5" size="large" placeholder="Quận/Huyện" />
                        <Input className="mt-5" size="large" placeholder="Xã Phường" />
                        <Input className="mt-5" size="large" placeholder="Địa chỉ" />
                        <TextArea rows={4} placeholder="Ghi chú về đơn hàng"/>
                    </Card>
                    <Card className="w-1/2 border-none m-10">
                    </Card>
                </div>
            </Layout>
        </div>
    )
}
export default Payment