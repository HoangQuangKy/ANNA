import TopBar from "./Common/TopBar"
import BottomBar from "./Common/BottomBar"
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from "../context/auth";

const Layout = ({ children }, style) => {
    // const [auth, setAuth] = useAuth()
    return (
        <div className={style? style : "ml-20"}>
            <TopBar />
            <main>
                {children}
            </main>
            <BottomBar />
            <ToastContainer />
        </div>
    )
}

export default Layout
