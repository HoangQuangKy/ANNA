import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getPagingStores } from '../../services'
import { Pagination } from 'antd';
import { Button } from 'antd';
import { Link } from 'react-router-dom'
import { Space, Table, Tag } from 'antd';
import { deleteStore } from '../../services';

function ManageStore() {
    const [storeEdit, setStoreEdit] = useState(null)
    const navigate = useNavigate()
    const [pageSize, setPageSize] = useState(3)
    const [pageIndex, setPageIndex] = useState(1)
    const [filmsPaging, setFilmsPaging] = useState([])
    const [count, setCount] = useState(0)

    const handleEditClick = (record) => {
        setStoreEdit(record);
    };
    const handleDeleteClick = async (id) => {
        try {
            const result = await deleteStore(id)

            alert(`${result.data.message}`)
            getPagingStore()
        } catch (error) {
            console.error('Error deleting film:', error);
        }
    }

    useEffect(() => {
        if (storeEdit) {
            navigate(`/admin/manage_store/${storeEdit._id}`);
        }
    }, [storeEdit]);

    const getPagingStore = async () => {
        try {
            const result = await getPagingStores(pageSize, pageIndex)
            console.log('result', result);
            setFilmsPaging(result.data.storeAll)
            setCount(result.data.count)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getPagingStore()
    }, [pageIndex, pageSize])

    const columns = [
        {
            title: 'Store Name',
            dataIndex: 'Store Name',
            key: 'Store Name',
            render: () => <a>Kính mắt Anna</a>,
        },
        {
            title: 'City',
            dataIndex: 'City',
            key: 'City',
            render: (_, text) => <a>{text.city}</a>,
        },
        {
            title: 'District',
            dataIndex: 'District',
            key: 'District',
            render: (_, text) => <a>{text.district}</a>,
        },
        {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
            render: (_, text) => <a>{text.address}</a>,
        },
        {
            title: 'Phone Number',
            dataIndex: 'Phone Number',
            key: 'Phone Number',
            render: (_, text) => <a>{text.phoneNumber}</a>,
        },
        {
            title: 'Open - Close',
            dataIndex: 'Open - Close',
            key: 'Open - Close',
            render: (_, text) => <a>{`${text.timeOpen} to ${text.timeClose}`}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => handleEditClick(record)}>Edit</Button>
                    <Button danger onClick={() => handleDeleteClick(record._id)}>Delete</Button>
                </Space>
            ),
        },
    ];
    return (
        <div className='w-full min-h-full pt-5 pl-2'>
            <Link to={'/admin/create_film'}>
                <Button
                    className=' py-1 mb-5 bg-sky-500 border-sky-500	text-white'
                    type='primary'>Thêm phim mới
                </Button>
            </Link>
            <Table
                dataSource={filmsPaging}
                columns={columns}
                pagination={false} />
            <Pagination
                className='pt-5'
                current={pageIndex}
                pageSize={pageSize}
                total={count}
                showSizeChanger
                pageSizeOptions={[3, 5, 8]}
                onChange={(page, pageSize) => {
                    setPageIndex(page)
                    setPageSize(pageSize)
                }}>

            </Pagination>
        </div>
    )
}

export default ManageStore
