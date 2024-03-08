import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure =  useAxiosSecure();
    const {user} = useAuth();
    const { refetch, data : cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    })
    console.log("aaaaaaaaaaaa",cart);
    return [cart, refetch]
};

export default useCart;