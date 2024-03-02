
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-500 text-xl mb-2">{subHeading}</p>
            <h3 className="text-4xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;