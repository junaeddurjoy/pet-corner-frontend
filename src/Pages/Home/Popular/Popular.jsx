import SectionTitle from "../../../components/SectionTitle";
import Services from "../../Shared/Services/Services";
import useTreatment from "../../../hooks/useTreatment";

const Popular = () => {
    const [service] = useTreatment();
    const popularDisease = service.filter (item => item.category === "popular");
    // const [service,setService] = useState([]);
    // useEffect( ()=>{
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularDisease = data.filter (item => item.category === "popular")
    //         setService(popularDisease)})
    // },[] )
    return (
        <section className="mb-12">
            <SectionTitle heading={'Specialized Services'} subHeading={'Popular For'}>
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularDisease.map(item => <Services key={item._id} item={item}></Services>)
                }
            </div>
        </section>
    );
};

export default Popular;