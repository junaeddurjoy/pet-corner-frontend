import TreatmentCard from "../../../components/TreatmentCard";

const BookTab = ({items}) => {
    return (
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    items.map(item => <TreatmentCard key={item._id} item={item}></TreatmentCard>)
                }
            </div>
    );
};

export default BookTab;