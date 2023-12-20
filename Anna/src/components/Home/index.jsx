import React from 'react'
import TopBar from '../Common/TopBar'
import BottomBar from '../Common/BottomBar'
import Banner from './Banner'
import Glasses from './glasses'
import HotTrendBanner from './HotTrendBanner'
import Adv from './Adv'
import Marketing from './Marketing'
import Customer from './Customer'

function Home() {
    return (
        <div className='flex flex-col items-center w-full'>
            <TopBar />
            <Banner />
            <Glasses />
            <HotTrendBanner />
            <Adv />
            <Marketing />
            <Customer />
            {/* <BottomBar /> */}
        </div >
    )
}

export default Home
