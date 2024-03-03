import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import Popular from '../../Home/Popular/Popular';

const Treatment = () => {
    return (
        <div>
            <Helmet>
                <title>Pet Corner | Our Treatments</title>
            </Helmet>
            <Cover title={'Our Treatments'} description={"Discover the ultimate care for your furry friends with our comprehensive pet treatment services. From routine check-ups to specialized treatments, we prioritize the health and happiness of your beloved companions. Trust our expert team to provide compassionate care and support for every aspect of your pet's well-being."} img={'https://us.123rf.com/450wm/tatyanamakarova/tatyanamakarova2310/tatyanamakarova231000403/215271828-dog-and-cat-cute-pets-web-banner-with-copy-space-generative-ai.jpg?ver=6https://us.123rf.com/450wm/tatyanamakarova/tatyanamakarova2310/tatyanamakarova231000403/215271828-dog-and-cat-cute-pets-web-banner-with-copy-space-generative-ai.jpg?ver=6'}></Cover>
            <Popular></Popular>
        </div>
    );
};

export default Treatment;