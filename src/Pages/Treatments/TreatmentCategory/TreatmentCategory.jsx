import SectionTitle from "../../../components/SectionTitle";
import Cover from "../../Shared/Cover/Cover";
import Services from "../../Shared/Services/Services";

const TreatmentCategory = ({ diseases,title,description,img,subHeading,heading }) => {
    return (
        <div className="pb-10">
            <Cover img={img} title={title} description={description}></Cover>
            <SectionTitle subHeading={subHeading} heading={heading} ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    diseases.map(item => <Services key={item.id} item={item}></Services>)
                }
            </div>
        </div>
    );
};

export default TreatmentCategory;