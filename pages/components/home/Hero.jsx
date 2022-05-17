import Zoom from 'react-reveal/Zoom';
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../sanity/client';

const Hero = ({ hero }) => {
    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }
    return (
        <div>
            <div className="flex mx-4 md:mx-24 xl:mx-36 justify-end items-center h-12">
                <strong className="cursor-pointer hidden lg:block">Menu</strong>
            </div>
            <div className="min-h-screen mx-4 md:mx-24 xl:mx-36 flex flex-col lg:flex-row items-center ">
                <div className="basis-1/2">
                    <Zoom left>
                        <div className="text-3xl text-tertiary font-lobster  text-center lg:text-left">
                            Welcome To
                        </div>
                        <div className=" text-7xl xl:text-8xl title leading-3  text-center lg:text-left">
                            {hero.title}
                        </div>
                        <div className="text-xl mt-4  text-center lg:text-left">
                            {hero.byline}
                        </div>
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <button className="px-4 py-2 bg-tertiary mr-4 rounded font-bold">
                                ORDER ONLINE
                            </button>
                            <button className="px-4 py-2 border-2 border-tertiary  font-bold hover:bg-tertiary rounded  transition-all duration-500">
                                BOOK A TABLE
                            </button>
                        </div>
                    </Zoom>
                </div>
                <div className="basis-1/2  mt-8 lg:mt-0">
                    <Zoom right>
                        <img className="w-full lg:w-auto" src={urlFor(hero.heroImage)} alt="Image of tasty chinese food " />

                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Hero;