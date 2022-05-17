const Contact = (  { contact , reach} ) => {
    return (
        <div className="mt-24 mx-4 md:mx-24 xl:mx-36">
            <div className="text-center">
                <div className="text-5xl title">
                    CONTACT US
                </div>
                <div className="text-2xl font-lobster text-tertiary">
                    for Table Reservation
                </div>
            </div>
            <div className=" lg:mt-8 py-8 rounded hover:shadow-black  hover:shadow-lg transition-all duration-500">
                <div className="text-3xl  text-center">


                    <a href={"tel:"+ contact.phone.replace(/\s/g, "")}> { contact.phone } </a>


                </div>
                <div className="mt-4 title text-3xl text-center">
                    OR
                </div>
                <div className="text-3xl mt-4 text-center">

                    <a href={ 'mailto:'+contact.email }>{ contact.email }
                    </a>
                </div>
            </div>
            <div className="mt-24 flex items-center flex-col lg:flex-row">
                <div className="basis-1/2 flex flex-col items-center lg:items-start">
                    <div className="text-4xl title text-center lg:text-left">
                        Find us at
                    </div>
                    <div className="text-2xl text-center lg:text-left">
                        3rd Floor No 195 & 196 Double Road Opposite Hdfc Bank, Bengaluru 560038 India
                    </div>
                </div>
                <div className="basis-1/2 mt-4 lg:mt-0 flex flex-col items-center lg:items-start">
                    <div className="text-3xl font-bold">
                        OPENING TIMES
                    </div>
                    <div className="text-xl">


                        {reach.timings1} <br />
                       { reach.timings2 }

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;