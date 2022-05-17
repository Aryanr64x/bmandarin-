import Rotate from 'react-reveal/Zoom';
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../sanity/client';



const ShowMenu = ({ exploreMenu }) => {
    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }
    return (
        <div className="min-h-screen mx-4 md:mx-24 xl:mx-36 flex flex-col lg:flex-row items-center ">
            <div className="basis-1/2">
                <Rotate top left >
                    <div className=" text-3xl md:text-5xl title text-center lg:text-left">
                        {exploreMenu.title}
                    </div>
                    <div className="text-lg md:text-2xl text-center lg:text-left mt-4 lg:mt-0">
                        {exploreMenu.byline}
                    </div>
                    <div className="mt-8 text-center lg:text-left ">
                        <button className="px-4 py-2 border-2 border-tertiary font-bold hover:bg-tertiary rounded  transition-all duration-500">
                            EXPLORE THE MENU 😋😋
                        </button>
                    </div>
                </Rotate>
            </div>
            <div className="basis-1/2 mt-8 lg:mt-0">
                <Rotate bottom right >
                    <img src={ urlFor(exploreMenu.mainImage) } alt="Collage of delicious food" border="0" />

                </Rotate>
            </div>
        </div>
    );
}

export default ShowMenu;