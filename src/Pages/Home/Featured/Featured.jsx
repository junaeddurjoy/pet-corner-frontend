import SectionTitle from "../../../components/SectionTitle";
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed my-10 pt-10 text-white">
            <SectionTitle heading={'Featured Services'} subHeading={'Check it out'}></SectionTitle>
            <div className="md:flex justify-center items-center pt-10 pb-20 px-36">
                <div>
                    <img src="https://images.ctfassets.net/sfnkq8lmu5d7/1uLTdtclwKK5DxIBne7G9Y/5739cd36e51a97e7ffd08f495a8826e6/2023-06-22_Male_cat_behavior_after_neutering__Hero.jpg?w=1000&h=750&fl=progressive&q=70&fm=jpg" alt="" />
                </div> 
                <div className="md:ml-10">
                    <p>Cat Neutering</p>
                    <p>
                        Neutering is a surgical procedure performed by veterinarians to remove the reproductive organs of male or female cats. In male cats, this procedure is often referred to as castration, where the testicles are removed. Neutering helps control the cat population by preventing unwanted litters and also offers health benefits, such as reducing the risk of certain reproductive-related diseases and behaviors like spraying or roaming.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;