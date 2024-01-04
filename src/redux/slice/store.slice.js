import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cities: [], // Sửa ở đây từ chuỗi thành mảng
    districts: [],
};

export const storeSlice = createSlice({
    name: 'stores',
    initialState,
    reducers: {
        setCities: (state, action) => {
            state.cities = action.payload.cities;
        },
        setDistricts: (state, action) => {
            state.districts = action.payload.districts;
        },
    },
});

export const { setCities, setDistricts } = storeSlice.actions;
export default storeSlice.reducer;