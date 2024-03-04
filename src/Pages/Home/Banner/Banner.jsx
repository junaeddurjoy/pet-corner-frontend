import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../assets/banner/1.jpg'
import image2 from '../../../assets/banner/2.jpg'
import image3 from '../../../assets/banner/3.jpg'
import image4 from '../../../assets/banner/4.jpg'
import image5 from '../../../assets/banner/5.jpg'
const Banner = () => {
    return (
            <Carousel>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4}/>
                </div>
                <div>
                    <img src={image5} />
                </div>
            </Carousel>
    );
};

export default Banner;