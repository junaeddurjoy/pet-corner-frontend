const Services = ({ item }) => {
    const { disease, image, price, symptoms } = item;
    return (
        <div className="flex  space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[90px] h-[70px]" src={image} alt="" />
            <div className="w-full">
                <div className="flex justify-between ">
                    <h3 className="uppercase">{disease}</h3>
                    <p className="text-yellow-500">{price}</p>
                </div>
                <p>{symptoms}</p>
            </div>
        </div>
    );
};

export default Services;