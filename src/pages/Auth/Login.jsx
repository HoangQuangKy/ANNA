import Layout from "../../components/Layout"
import avt from "../../assets/avt-login.jpg"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../../context/auth"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useAuth()

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:8080/api/v1/auth/login`,
                { email, password }
            );
            if (res && res.data.success) {
                toast.success("Đăng nhập thành công");
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                navigate('/');
            } else {
                toast.error("Đăng nhập thất bại");
            }
        } catch (error) {
            console.log(error);
            toast.error('Đã xảy ra lỗi')
        }
    };

    return (
        <Layout>
            <div className=" flex justify-around mt-10 mb-10">
                <div>
                    <img src={avt} alt="" />
                </div>
                <div className=" pr-32 mt-8">
                    <h3 className=" text-4xl text-center font-bold mb-2">Đăng ký email</h3>
                    <p className=" mt-4">Hãy đăng ký để được hưởng nhiều đặc quyền riêng </p>
                    <p className=" text-center text-1xl">dành cho bạn</p>
                    <div>
                        <form onSubmit={handleSubmit}>

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
                            <button type="submit" className=" bg-teal-400 w-full p-2 rounded-lg text-white font-extrabold">Đăng nhập</button>
                            <p className=" text-center mt-2">Hoặc</p>
                            <button type="submit" className=" shadow-md w-full p-2 rounded-lg mb-6 text-gray-300 font-bold">Đăng nhập bằng google</button>
                            <p className=" text-center">Bạn chưa có tài khoản Anna ?</p>
                            <NavLink className=" flex items-center justify-center mt-2 text-teal-400" to='/register'>Đăng ký ngay</NavLink>
                        </form>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login
