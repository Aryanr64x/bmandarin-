import Zoom from 'react-reveal/Zoom';
import imageUrlBuilder from '@sanity/image-url'
import client from '../../sanity/client'

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
                        <div className="flex justify-center lg:justify-start">
                            <svg className="h-28 md:h-36 lg:h-48 text-center lg:text-left" viewBox="0 0 443 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.73438 5.29688H31.9844C38.2656 5.64062 42.0781 7.125 43.4219 9.75C44.7656 12.375 45.3125 15.1875 45.0625 18.1875C44.8125 21.1875 42.5781 25 38.3594 29.625C44.9219 29.375 48.5781 31.7188 49.3281 36.6562V57.0938C48.9844 60.75 47.7812 63.5938 45.7188 65.625C43.6875 67.625 41.2031 68.9688 38.2656 69.6562C31.3906 71.2812 24.2656 70.5625 16.8906 67.5L21.5781 55.7344C28.2031 57.8281 32.3281 58.3438 33.9531 57.2812C35.6094 56.1875 36.2812 50.7812 35.9688 41.0625L18.25 41.1562V52.6875C16.5938 64.6562 10.9375 70.0781 1.28125 68.9531V57.0938C4.1875 57.125 5.40625 54.6562 4.9375 49.6875V41.5781H1.1875L1.23438 29.625L6.01562 29.7188V18.6094H1.04688L2.73438 5.29688ZM18.25 18.6094V29.1094L24.2969 27.7969C28.5469 25.5156 30.4844 22.4531 30.1094 18.6094H18.25ZM79.75 0.5625L91.2812 4.92188L89.9219 9.42188H108.484L106.562 23.2969L96.4375 23.3438L112.516 66.4219L100.094 70.6875L83.5938 26.625L65.1719 70.3125L52.5625 66.4688L70.75 23.1562L57.4844 23.1094L58.5156 9.42188H76.0469L79.75 0.5625ZM85.7031 48.375L92.875 56.25L79.6094 69.5625L72.3906 61.7812L85.7031 48.375ZM115.562 5.39062H129.156L129.109 15.5156L130.703 11.5781C136.672 13.1719 141.078 14.9687 143.922 16.9688C146.797 18.9375 149.766 22.1719 152.828 26.6719L153.484 28.5469L153.438 5.48438H166.938V58.0781C167.156 60.4844 166.109 63.0469 163.797 65.7656C161.516 68.4531 156.812 69.6094 149.688 69.2344V55.9688C152.812 55.7188 154.125 53.7031 153.625 49.9219C153.656 47.7969 153.188 45.5 152.219 43.0312C151.281 40.5312 148.312 37.2188 143.312 33.0938C138.344 28.9375 133.609 26.2344 129.109 24.9844V69.2344H115.469L115.562 5.39062ZM176.453 5.625H225.812L223.469 19.6875H189.766V49.4531C189.422 53.7031 191.781 55.5312 196.844 54.9375H213.625L213.578 43.9219L202.328 43.9688V30.6562L227.406 30.7031V69L227.359 72.6562L213.766 75.2812V64.125L208.562 69L188.453 69.0469C183.922 68.3906 180.672 66.6719 178.703 63.8906C176.734 61.0781 175.734 57.0469 175.703 51.7969V23.8125L183.953 19.6875L171.672 19.7344L176.453 5.625ZM237.438 5.10938H251.359L251.312 38.625L259.281 38.7188L257.922 49.9688L251.688 50.0156V54.1875L276.719 54.1406L275.266 68.8594L232.094 68.7656L234.203 54.2812H237.156V50.1094H232.562L233.781 38.6719L237.344 38.625L237.438 5.10938ZM294.906 5.10938V11.25L298.562 5.10938H329.5C333.312 6.17188 335.109 11.5469 334.891 21.2344V63.4688C334.141 66.9062 331.219 68.7031 326.125 68.8594H290.359C285.047 69.0781 281.969 66.7656 281.125 61.9219V7.96875L294.906 5.10938ZM294.906 18.9375V55.0312H321.062V18.9375H294.906ZM342.484 5.25H382.891C385.734 5.59375 387.688 7.42187 388.75 10.7344L388.656 29.5781C387.75 33.9219 386.438 36.8438 384.719 38.3438C383 39.8125 379.938 41.5156 375.531 43.4531L379.234 49.3594C381.984 53.6719 385.875 56.1562 390.906 56.8125L389.828 71.25L382.281 69.8438C377.375 68.8438 372.188 63.7188 366.719 54.4688L363.766 48.8438L356.406 52.3125L356.359 69.0469L343.234 69.1406V56.6719L338.078 45.6562L343.141 42.4688L343.234 22.7344L349.656 19.1719L339.531 19.2188L342.484 5.25ZM356.406 19.2188V37.2656L370.422 31.7344C373.828 30.4844 375.531 28.4688 375.531 25.6875V19.2188H356.406ZM397.094 5.15625H442.234L438.484 19.3125L415.703 19.4062V26.3906H440.688L438.438 39.1406L415.375 39.0938C414.906 45.8438 415.312 50.3125 416.594 52.5C417.906 54.6562 420.078 55.75 423.109 55.7812H440.266L437.969 69.0469C424.188 69.3594 416.188 68.9375 413.969 67.7812C411.781 66.5938 409.484 64.6562 407.078 61.9688C404.703 59.25 403.203 55.2656 402.578 50.0156V39.0938L394.844 39.1406L396.766 26.2969L403.094 26.3438V19.0312L394.844 19.0781L397.094 5.15625ZM23.0312 83.75L37.8438 83.8906V88.4844H53.7344C57.6094 89.0781 59.75 91.2344 60.1562 94.9531L60.0625 137.469C58.4688 144.219 56.2344 148.516 53.3594 150.359C50.4844 152.172 46.9375 153.078 42.7188 153.078V138.875C45.2812 139.094 46.3594 133.047 45.9531 120.734V102.688H37.9844V149.938L22.8906 152.609L22.9375 102.688H16.75V150.734L1.65625 152.656L1.60938 105.359L6.71875 102.312H0.203125L4.09375 88.4844H23.0312V83.75ZM91.6562 83.5625L103.188 87.9219L101.828 92.4219H120.391L118.469 106.297L108.344 106.344L124.422 149.422L112 153.688L95.5 109.625L77.0781 153.312L64.4688 149.469L82.6562 106.156L69.3906 106.109L70.4219 92.4219H87.9531L91.6562 83.5625ZM97.6094 131.375L104.781 139.25L91.5156 152.562L84.2969 144.781L97.6094 131.375ZM127.469 88.3906H141.062L141.016 98.5156L142.609 94.5781C148.578 96.1719 152.984 97.9688 155.828 99.9688C158.703 101.938 161.672 105.172 164.734 109.672L165.391 111.547L165.344 88.4844H178.844V141.078C179.062 143.484 178.016 146.047 175.703 148.766C173.422 151.453 168.719 152.609 161.594 152.234V138.969C164.719 138.719 166.031 136.703 165.531 132.922C165.562 130.797 165.094 128.5 164.125 126.031C163.188 123.531 160.219 120.219 155.219 116.094C150.25 111.938 145.516 109.234 141.016 107.984V152.234H127.375L127.469 88.3906ZM185.922 88.2969H227.266L236.266 88.3438V116.844C236.641 121.625 236.172 126.219 234.859 130.625C233.578 135 231.078 139.281 227.359 143.469C223.672 147.625 219.594 150.188 215.125 151.156C210.688 152.125 200.453 152.422 184.422 152.047L184.516 138.734L193.422 138.641L188.172 136.016V102.219H183.672L185.922 88.2969ZM201.719 102.219V139.016C206.469 139.672 210.562 138.953 214 136.859C217.438 134.734 219.734 132.094 220.891 128.938C222.047 125.75 222.406 116.844 221.969 102.219H201.719ZM266.5 83.5625L278.031 87.9219L276.672 92.4219H295.234L293.312 106.297L283.188 106.344L299.266 149.422L286.844 153.688L270.344 109.625L251.922 153.312L239.312 149.469L257.5 106.156L244.234 106.109L245.266 92.4219H262.797L266.5 83.5625ZM272.453 131.375L279.625 139.25L266.359 152.562L259.141 144.781L272.453 131.375ZM304.984 88.25H345.391C348.234 88.5938 350.188 90.4219 351.25 93.7344L351.156 112.578C350.25 116.922 348.938 119.844 347.219 121.344C345.5 122.812 342.438 124.516 338.031 126.453L341.734 132.359C344.484 136.672 348.375 139.156 353.406 139.812L352.328 154.25L344.781 152.844C339.875 151.844 334.688 146.719 329.219 137.469L326.266 131.844L318.906 135.312L318.859 152.047L305.734 152.141V139.672L300.578 128.656L305.641 125.469L305.734 105.734L312.156 102.172L302.031 102.219L304.984 88.25ZM318.906 102.219V120.266L332.922 114.734C336.328 113.484 338.031 111.469 338.031 108.688V102.219H318.906ZM358.609 88.25H384.156L382.281 101.75H378.156V139.016H383.406L382.656 152.094H357.109L358.375 138.922L363.859 138.969L363.953 105.078L369.859 101.75H357.25L358.609 88.25ZM389.781 88.3906H403.375L403.328 98.5156L404.922 94.5781C410.891 96.1719 415.297 97.9688 418.141 99.9688C421.016 101.938 423.984 105.172 427.047 109.672L427.703 111.547L427.656 88.4844H441.156V141.078C441.375 143.484 440.328 146.047 438.016 148.766C435.734 151.453 431.031 152.609 423.906 152.234V138.969C427.031 138.719 428.344 136.703 427.844 132.922C427.875 130.797 427.406 128.5 426.438 126.031C425.5 123.531 422.531 120.219 417.531 116.094C412.562 111.938 407.828 109.234 403.328 107.984V152.234H389.688L389.781 88.3906Z" fill="#FCECC9" />
                            </svg>

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