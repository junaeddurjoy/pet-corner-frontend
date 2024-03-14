// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTreatment = () => {
    // const [service, setService] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             setService(data);
    //             setLoading(false);
    //         })
    // }, [])
    const axiosPublic = useAxiosPublic();
    const {data: service = [], isPending: loading, refetch} = useQuery({
        queryKey: ['services'],
        queryFn: async() => {
            const res = await axiosPublic.get('/services');
            return res.data;
        }
    })

    return [service, loading, refetch]
}

export default useTreatment;