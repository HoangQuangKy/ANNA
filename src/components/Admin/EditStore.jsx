import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
    Form,
    Input,
    Button,
    Select
} from 'antd';
import { editStore, getStoreById } from '../../services';
function EditStore() {
    const [cities, setCities] = useState('')
    const [districts, setDistricts] = useState('')
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [cityId, setCityId] = useState('')

    const citiesSelect = []
    const districtSelect = []
    for (let index = 0; index < cities.length; index++) {
        citiesSelect.push({
            label: cities[index].province_name,
            value: cities[index].province_name
        })

    }
    for (let index = 0; index < districts.length; index++) {
        districtSelect.push({
            label: districts[index].district_name,
            value: districts[index].district_name
        })

    }
    const setId = () => {
        if (Array.isArray(cities)) {
            const cityName = cities.find((item) => item.province_name === selectedCity)
            setCityId(cityName?.province_id)
        }
    }
    console.log('citiesSelect', citiesSelect);
    const params = useParams()
    const [form] = Form.useForm()

    // cập nhật 
    const getStore = async () => {
        try {
            const store = await getStoreById(params._id)
            console.log(store);
            const useData = store.data.getStore
            console.log('useData', useData);

            form.setFieldsValue({
                city: useData.city,
                district: useData.district,
                address: useData.address,
                phoneNumber: useData.phoneNumber,
                timeOpen: useData.timeOpen,
                timeClose: useData.timeClose,
            });
        } catch (error) {
            console.log(error);
        }
    }

    const onFinish = async (values) => {
        console.log('values', values);
        const newFormData = new FormData();
        newFormData.append("city", values.city);
        newFormData.append("district", values.district);
        newFormData.append("address", values.address);
        newFormData.append("phoneNumber", values.phoneNumber);
        newFormData.append("timeOpen", values.timeOpen);
        newFormData.append("timeClose", values.timeClose);
        try {
            const result = await editStore(params._id, newFormData);
            console.log('result', result);
            alert('update thành công');
        } catch (error) {
            console.log(error);
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

    // call API for get all cities and districts

    const fetchCities = async () => {
        try {
            const response = await axios.get('https://vapi.vnappmob.com/api/province/');
            setCities(response.data.results)
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };
    const fetchDistricts = async () => {
        if (selectedCity) {
            try {
                const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${cityId}`);
                setDistricts(response.data.results)
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        }
    };
    useEffect(() => {
        if (params._id) {
            getStore()
        }
    }, [])
    useEffect(() => {
        fetchCities();
    }, []);

    useEffect(() => {
        setId()
    }, [selectedCity])
    useEffect(() => {
        fetchDistricts();
    }, [selectedCity]);

    console.log('setCities', selectedCity);
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
                encType="multipart/form-data"
            >
                <Form.Item
                    label="City"
                    name='city'
                    initialValue={form.city}
                >
                    <Select
                        mode='single'
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please choose the city"
                        options={citiesSelect}
                        onChange={(value) => setSelectedCity(value)}>

                    </Select>
                </Form.Item>
                <Form.Item
                    label="District"
                    name='district'
                    initialValue={form.district}>
                    <Select
                        mode='single'
                        allowClear
                        style={{ width: '100%' }}
                        placeholder="Please choose the city"
                        options={districtSelect}
                    >

                    </Select>
                </Form.Item>
                <Form.Item
                    label="Address"
                    name='address'
                    initialValue={form.address}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name='phoneNumber'
                    initialValue={form.phoneNumber}
                    rules={[
                        { required: true, message: 'Vui lòng nhập lại số điện thoại!' },
                        { validator: phoneValidation },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Open"
                    name='timeOpen'
                    initialValue={form.timeOpen}
                    rules={[
                        { required: true, message: 'Vui lòng nhập giờ mở cửa!' },
                        { validator: validation },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Close"
                    name='timeClose'
                    initialValue={form.timeClose}
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
