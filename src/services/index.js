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