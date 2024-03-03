import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import Services from "../../Shared/Services/Services";

const TreatmentCategory = ({ diseases, title, description, img, subHeading, heading, pet }) => {
    return (
        <div className="pb-10">
            <Cover img={img} title={title} description={description}></Cover>
            <SectionTitle subHeading={subHeading} heading={heading} ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    diseases.map(item => <Services key={item.id} item={item}></Services>)
                }
            </div>
            <Link to={`/appointment/${pet}`}>
                <button className="btn btn-outline border-0 border-b-4 text-black">Read More</button>
            </Link>
        </div>
    );
};

export default TreatmentCategory;