import Layout from "../Layout"
import { Card, Typography, Input, Button } from 'antd'


const Payment = () => {


    return (
        <div>
            <Layout>
                <div className="w-full flex flex-warap pr-28 pl-28">
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
                        <Typography.Title level={3} className="mt-5">Thông tin bổ sung</Typography.Title>
                        <textarea rows={4} className="mt-1 border-solid border rounded-[10px] p-2 w-full" placeholder="Ghi chú đơn hàng" />
                    </Card>
                    <Card className="w-1/2 border-none m-10 bg-slate-100">
                    <Typography.Title level={3} className="mt-5">Nhập mã giảm giá</Typography.Title>

                    </Card>
                </div>
                <div className="w-full flex flex-warap pr-28 pl-28">
                <Card className="w-2/5 border-none m-10 mt-0">
                    <Typography.Title level={4}>Phương thức thanh toán</Typography.Title>
                    <div className="flex items-center gap-3">
                        <input type="radio" checked/>
                        <p>Trả tiền mặt khi thanh toán</p>
                    </div>
                    <p>Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng và cho các mục đích cụ thể khác đã được mô tả trong chính sách riêng tư của chúng tôi.</p>
                    <Button className="w-full mt-5 bg-emerald-300 text-white">Đặt hàng</Button>
                </Card>
                </div>
            </Layout>
        </div>
    )
}
export default Payment