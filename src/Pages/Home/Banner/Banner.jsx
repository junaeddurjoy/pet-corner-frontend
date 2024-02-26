import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
            <Carousel>
                <div>
                    <img src="../../../../public/banner/1.jpg" />
                </div>
                <div>
                    <img src="../../../../public/banner/2.jpg" />
                </div>
                <div>
                    <img src="../../../../public/banner/3.jpg" />
                </div>
                <div>
                    <img src="../../../../public/banner/4.jpg" />
                </div>
                <div>
                    <img src="../../../../public/banner/5.jpg" />
                </div>
            </Carousel>
    );
};

export default Banner;