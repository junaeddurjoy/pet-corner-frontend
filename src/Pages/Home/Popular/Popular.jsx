import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import Services from "../../Shared/Services/Services";

const Popular = () => {
    const [service,setService] = useState([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data =>{
            const popularDisease = data.filter (item => item.category === "popular")
            setService(popularDisease)})
    },[] )
    return (
        <section className="mb-12">
            <SectionTitle heading={'Specialized Services'} subHeading={'Popular For'}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    service.map(item => <Services key={item.id} item={item}></Services>)
                }
            </div>
        </section>
    );
};

export default Popular;