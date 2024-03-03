import { Helmet } from 'react-helmet-async';
import useTreatment from '../../../hooks/useTreatment';
import TreatmentCategory from '../TreatmentCategory/TreatmentCategory';

const Treatment = () => {
    const [service] = useTreatment();
    const cat = service.filter(item => item.pet === "cat");
    const dog = service.filter(item => item.pet === "dog");
    const bird = service.filter(item => item.pet === "bird");
    const other = service.filter(item => item.pet === "other");
    return (
        <div className='pb-20'>
            <Helmet>
                <title>Pet Corner | Our Treatments</title>
            </Helmet>
            {/* all */}
            <TreatmentCategory
                diseases={service}
                title={'Our Treatments'}
                description={"Discover the ultimate care for your furry friends with our comprehensive pet treatment services. From routine check-ups to specialized treatments, we prioritize the health and happiness of your beloved companions. Trust our expert team to provide compassionate care and support for every aspect of your pet's well-being."}
                img={'https://us.123rf.com/450wm/tatyanamakarova/tatyanamakarova2310/tatyanamakarova231000403/215271828-dog-and-cat-cute-pets-web-banner-with-copy-space-generative-ai.jpg?ver=6https://us.123rf.com/450wm/tatyanamakarova/tatyanamakarova2310/tatyanamakarova231000403/215271828-dog-and-cat-cute-pets-web-banner-with-copy-space-generative-ai.jpg?ver=6'}
                subHeading={'Bring Your Pet'}
                heading={'All'}>
            </TreatmentCategory>
            {/* cat */}
            <TreatmentCategory
                diseases={cat}
                title={'Kitten Treatments'}
                description={"Pamper your feline with premium grooming, nourishing diets, and expert veterinary care. Keep your cat healthy, happy, and purring!"}
                img={'https://www.purina.co.uk/sites/default/files/2023-03/Hero%20Pedigree%20Cats.jpg'}
                subHeading={'Bring Your Kitty'}
                heading={'Cat'}>
            </TreatmentCategory>
            {/* dog */}
            <TreatmentCategory
                diseases={dog}
                title={'Puppy Treatments'}
                description={"Elevate your pup's wellness with tailored grooming, nutritious meals, and professional veterinary services. Ensure your dog's vitality and wagging tail!"}
                img={'https://funfactsforkids.com.au/wp-content/uploads/2022/11/1200-x-680px235.png'}
                subHeading={'Bring Your Puppy'}
                heading={'Dog'}>
            </TreatmentCategory>
            {/* bird */}
            <TreatmentCategory
                diseases={bird}
                title={'Bird Treatments'}
                description={"Enhance your feathered friend's life with specialized grooming, balanced diets, and avian healthcare. Nurture your bird's joy and vibrant plumage!"}
                img={'https://www.thesprucepets.com/thmb/r23RBk0t4DC9UHp2pTzuXLz7Jj4=/3600x0/filters:no_upscale():strip_icc()/popular-small-bird-species-390926-hero-d3d0af7bb6ed4947b0c3c5afb4784456.jpg'}
                heading={'Bird'}>
            </TreatmentCategory>
            {/* others */}
            <TreatmentCategory
                diseases={other}
                title={'Other Pets Treatments'}
                description={"Care for all your pets with specialized grooming, balanced diets, and expert veterinary services. Keep your companions healthy, happy, and thriving!"}
                img={'https://opensanctuary.org/wp-content/uploads/2019/06/Copy-of-randy-41.jpg'}
                heading={'Others'}>
            </TreatmentCategory>
        </div>
    );
};

export default Treatment;