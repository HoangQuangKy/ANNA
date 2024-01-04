import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router";
import {
    Form,
    Input,
    InputNumber,
    Select,
    Upload,
    Button,
} from 'antd';
import { editStore, getStoreById } from '../../services';
function EditStore() {
    const params = useParams()
    const [form] = Form.useForm()

    const getStore = async () => {
        try {
            const store = await getStoreById(params.id)
            const useData = store.data.getStore
            form.setFieldsValue({
                city: useData.city,
                district: useData.district,
                address: useData.address,
                phoneNumber: useData.phoneNumber,
                timeOpen: useData.timeOpen,
                timeClose: useData.timeClose
            })
        } catch (error) {
            console.log(error);
        }
    }

    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append("city", values.city)
        formData.append("district", values.district)
        formData.append("address", values.address)
        formData.append("phoneNumber", values.phoneNumber)
        formData.append("timeOpen", values.timeOpen)
        formData.append("timeClose", values.timeClose)

        try {
            const result = await editStore(params.id, formData)
            console.log('new', result);
            alert('update thành công')
        } catch (error) {
            console.log(error)
        }
    };

    const validation = (rule, value) => {
        const timeFormatRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
        if (value && !timeFormatRegex.test(value)) {
            return Promise.reject('Vui lòng nhập định dạng giờ:phút hợp lệ (HH:mm).');
        }


        return Promise.resolve();
    }
    const phoneValidation = (rule, value) => {
        const phoneNumberRegax = /^[0-9]{10,11}$/;

        if (value && !phoneNumberRegax.test(value)) {
            return Promise.reject('Số điện thoại của bạn không đúng vui lòng nhập lại số điện thoại')
        }
        return Promise.resolve()
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        if (params.id) {
            getStore()
        }
    }, [])
    return (
        <div className='bg-white w-full h-full ml-5 mt-5'>
            <h2 className='mb-3 ml-14 font-bold	text-xl	'>Thay đổi thông tin cửa hàng: </h2>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 650,
                }}
                name='basic'
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"

            >
                <Form.Item
                    label="City"
                    name='city'
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="District"
                    name='district'>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name='address'>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name='phoneNumber'
                    rules={[
                        { required: true, message: 'Vui lòng nhập lại số điện thoại!' },
                        { validator: phoneValidation },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Open"
                    name='timeOpen'
                    rules={[
                        { required: true, message: 'Vui lòng nhập giờ mở cửa!' },
                        { validator: validation },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Close"
                    name='timeClose'
                    rules={[
                        { required: true, message: 'Vui lòng nhập giờ đóng cửa!' },
                        { validator: validation },
                    ]}>
                    <Input />
                </Form.Item>

                <Button className='mt-5' htmlType="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EditStore
