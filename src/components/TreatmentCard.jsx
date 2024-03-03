

const TreatmentCard = ({item}) => {
    const {disease,symptoms,image,price,pet} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none">
                <figure><img className="w-96 h-[280px]" src={image} alt={pet} /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 py-1 opacity-70">${price}</p>
                <div className="card-body text-center">
                    <p className="text-xl font-bold">{disease}</p>
                    <p>{symptoms}</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4  bg-base-300 text-orange-500">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentCard;