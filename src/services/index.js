import axios from "axios";


const AnnaInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
})

export const getSortAddress = (city, district) => {
    return AnnaInstance.get(`/store/address?city=${city}&district=${district}`)
}

export const getAllAddress = () => {
    return AnnaInstance.get(`/store/city`)
}

export const getPagingStores = (pageSize = 3, pageIndex = 1) => {
    return AnnaInstance.get(`/store/getPagingStore?pageSize=${pageSize}&pageIndex=${pageIndex}`)
}


export const deleteStore = (id) => {
    return AnnaInstance.delete(`/store/deleteStore/${id}`)
}

export const editStore = (id) => {
    return AnnaInstance.put(`/store/editStore/${id}`)
}

export const getStoreById = (id) => {
    return AnnaInstance.get(`/store/getStoreById/${id}`)
}