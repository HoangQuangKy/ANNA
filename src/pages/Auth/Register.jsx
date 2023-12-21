import Layout from "../../components/Layout"
import avt from "../../assets/avt-register.jpg"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import axios from "axios"
const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate();

    // form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/auth/register`,
                { name, email, password, phone }
            );
            if (res && res.data.success) {
                toast.success("Đăng ký thành công");
                navigate('/login');
            } else {
                toast.error("Đăng ký thất bại");
            }
        } catch (error) {
            console.log(error);
            toast.error('Đã xảy ra lỗi')
        }
    };

    return (
        <Layout>
            <div className=" flex justify-around mt-10">
                <div>
                    <img src={avt} alt="" />
                </div>
                <div className=" pr-32">
                    <h3 className=" text-4xl text-center font-bold mb-2">Đăng ký email</h3>
                    <p className=" mt-4">Hãy đăng ký để được hưởng nhiều đặc quyền riêng </p>
                    <p className=" text-center text-1xl">dành cho bạn</p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 mt-3">
                                {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputName1"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Họ và tên"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Địa chỉ email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleInputPhone1"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Số điện thoại"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Mật khẩu"
                                    required
                                />
                            </div>
                            <button type="submit" className=" bg-teal-400 w-full p-2 rounded-lg text-white font-extrabold">Đăng ký ngay</button>
                            <p className=" text-center mt-2">Hoặc</p>
                            <button type="submit" className=" shadow-md w-full p-2 rounded-lg mb-6 text-gray-300 font-bold">Đăng nhập bằng google</button>
                            <p className=" text-center">Bạn đã có tài khoản Anna ?</p>
                            <NavLink className=" flex items-center justify-center mt-2 text-teal-400" to='/login'>Đăng nhập ngay</NavLink>
                        </form>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register
