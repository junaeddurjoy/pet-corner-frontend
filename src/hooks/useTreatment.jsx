import { useEffect, useState } from "react";

const useTreatment = () => {
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setService(data);
                setLoading(false);
            })
    }, [])
    return [service, loading]
}

export default useTreatment;