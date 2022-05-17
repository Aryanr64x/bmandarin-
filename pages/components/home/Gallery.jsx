import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tilt from 'react-parallax-tilt';
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../sanity/client';

const Gallery = ({ gallery }) => {
    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }
    return (
        <div className=" lg:pt-24 pb-24 mx-8 md:mx-12  lg:mx-36 bg-primary">
            <div className="text-center text-3xl md:text-5xl title">
                WE SERVE TASTE WITH LOVE AND SPICE !
            </div>
            <div className="mt-8">
                <Slider {...settings} >
                    {
                        gallery.map((image) => {
                            return (
                                <Tilt>
                                    <div className="align-middle px-8">
                                        <img className="w-full h-[200px] md:h-[400px] lg:h-[500px] rounded-lg shadow-lg shadow-black" src={urlFor(image.image)} alt="amb3" border="0" />
                                    </div>
                                </Tilt>
                            )
                        })
                    }
                </Slider>

            </div>
        </div>
    );
};


export default Gallery;

