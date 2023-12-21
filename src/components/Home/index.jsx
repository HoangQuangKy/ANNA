import TopBar from '../Common/TopBar'
import BottomBar from '../Common/BottomBar'
import Glasses from "../Home/Glasses"
import HotTrendBanner from "../Home/HotTrendBanner"
import Adv from "../Home/Adv"
import Marketing from "../Home/Marketing"
import Customer from "../Home/Customer"
import Banner from './Banner'

// import { useAuth } from '../../context/auth'
function Home() {
    // const [auth, setAuth] = useAuth()
    return (
        <div className='flex flex-col items-center'>
            <TopBar />
            <Banner />
            <Glasses />
            <HotTrendBanner />
            <Adv />
            <Marketing />
            <Customer />
            <BottomBar />
            {/* <pre>{JSON.stringify(auth, niull, 4)}</pre> */}
        </div >
    )
}

export default Home
