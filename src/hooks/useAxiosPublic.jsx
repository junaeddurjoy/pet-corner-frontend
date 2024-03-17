import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://pet-corner-backend.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;