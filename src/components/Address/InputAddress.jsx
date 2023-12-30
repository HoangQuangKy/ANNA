import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllAddress, getSortAddress } from '../../services';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



function InputAddress() {
    const centerVietNam = [14.0583, 108.2772];
    const zoomLevel = 6; // Cấp độ zoom phù hợp

    const [address, setAddress] = useState();
    const [cities, setCities] = useState([]);
    const [cityName, setCityName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [selectedCity, setSelectedCity] = useState('');
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');

    const fetchCities = async () => {
        try {
            const response = await axios.get('https://vapi.vnappmob.com/api/province/');
            setCities(response.data.results);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    };

    const fetchDistricts = async () => {
        if (selectedCity) {
            try {
                const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${selectedCity}`);
                setDistricts(response.data.results);
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        }
    };

    const updateCityAndDistrictNames = () => {
        const cityName1 = cities.find(item => item.province_id === selectedCity);
        const districtName1 = districts.find(item => item.district_id === selectedDistrict);
        setCityName(cityName1?.province_name || "");
        setDistrictName(districtName1?.district_name || "");
    };

    const getAddress = async () => {
        try {
            if (!cityName || !districtName) {
                const allAddress = await getAllAddress();
                setAddress(allAddress);
            } else {
                const sortAddress = await getSortAddress(cityName, districtName);
                setAddress(sortAddress);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCities();
    }, []);

    useEffect(() => {
        fetchDistricts();
    }, [selectedCity]);

    useEffect(() => {
        updateCityAndDistrictNames();
    }, [selectedCity, selectedDistrict]);

    useEffect(() => {
        getAddress();
    }, [cityName, districtName]);

    console.log('getAddress', address);

    return (
        <div className='flex items-center justify-center mb-24'>
            <div className='flex flex-col justify-center items-center h-full'>
                < div className='px-5 py-3 w-[450px] bg-[#fdcc0c] flex flex-row items-center justify-center' >
                    <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity} className='bg-[#fff6] mr-4 h-[45px] px-0 py-1 border'>
                        <option value="" className=''>Chọn thành phố</option>
                        {cities.map(city => (
                            <option key={city.province_id} value={city.province_id}>{city.province_name}</option>
                        ))}
                    </select>
                    <select onChange={(e) => setSelectedDistrict(e.target.value)} value={selectedDistrict} className='bg-[#fff6] mr-4 h-[45px] px-0 py-1 border w-[210px]'>
                        <option value="">Chọn quận</option>
                        {districts.map(district => (
                            <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
                        ))}
                    </select>
                </ div>
                <div style={{ height: '700px', overflowY: 'auto', width: '450px' }}>
                    <div style={{ height: '700px', overflowY: 'auto', width: '450px' }}>
                        {address?.data?.formatAddress?.map((item) => (
                            <div key={item.id} className='flex flex-col p-[10px] mb-2'>
                                <p className='text-base	font-bold mb-2'>{` KÍNH MẮT ANNA-${item.address}`}</p>
                                <p className='text-sm mb-2'>{item.completeAddress}</p>
                                <p className='text-sm mb-2'>{item.phoneNumber}</p>
                                <p className='text-sm mb-2'>{`${item.timeOpen} - ${item.timeClose}`}</p>
                                <p className='text-sm mb-2 text-[#007bff]'>Gọi điện</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <div className='w-[850px] h-[760px]'>
                <MapContainer center={centerVietNam} zoom={zoomLevel} className='w-[850px] h-[760px]'>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={centerVietNam}>
                        <Popup>
                            Anna Store
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div >
    );
}

export default InputAddress;