import React from 'react'
import TopBar from '../Common/TopBar'
import BottomBar from '../Common/BottomBar'
import InputAddress from './InputAddress'

function Address() {
    return (
        <div className='flex items-center flex-col'>
            <TopBar />
            <div className='flex min-w-full flex-col items-center'>
                <div className='flex flex-col mt-24 w-[1340px]'>
                    <p className='text-4xl font-medium mb-3 ml-6'>
                        DANH SÁCH ĐẠI LÝ KÍNH MẮT ANNA
                    </p>
                    <InputAddress />

                </div>
            </div>
            <BottomBar />
        </div>
    )
}

export default Address
