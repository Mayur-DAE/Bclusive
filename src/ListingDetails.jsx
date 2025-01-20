import { Bus, Image, MapPin, Play, Rotate3D } from "lucide-react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Slider from "react-slick";
import { useState } from 'react';

const Star = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path d="M4.90329 1.01718C5.2701 0.273934 6.32995 0.273936 6.69676 1.01718L7.44827 2.5399C7.59393 2.83504 7.87549 3.03961 8.2012 3.08694L9.88163 3.33112C10.7018 3.4503 11.0294 4.45828 10.4358 5.03681L9.21987 6.22208C8.98419 6.45182 8.87664 6.78282 8.93228 7.10721L9.21933 8.78085C9.35944 9.59775 8.50201 10.2207 7.76838 9.83502L6.26537 9.04484C5.97404 8.89168 5.62601 8.89168 5.33468 9.04484L3.83167 9.83502C3.09804 10.2207 2.24061 9.59775 2.38072 8.78084L2.66777 7.10721C2.72341 6.78282 2.61586 6.45182 2.38017 6.22208L1.16421 5.03681C0.570694 4.45828 0.898205 3.4503 1.71843 3.33112L3.39884 3.08694C3.72456 3.03961 4.00612 2.83504 4.15178 2.5399L4.90329 1.01718Z" fill="#F4C700" />
        </svg>
    )
}

const ListingDetails = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <>
            <Header isHeaderVisible={true} />
            <section className="grid grid-cols-12 gap-4 px-6 mt-12">
                <div className="col-span-12 lg:col-span-7 relative">
                    <div className="absolute left-4 top-4 right-4 flex flex-col lg:flex-row items-start gap-4 justify-between z-20">
                        <div className="flex items-center flex-wrap w-full lg:w-3/6 gap-1 md:gap-2 text-sm lg:text-lg">
                            <div className="border border-white bg-white/20 text-white py-1 md:py-2 px-2 md:px-6 rounded-3xl"> Travel</div>
                            <div className="border border-white bg-white/20 text-white py-1 md:py-2 px-2 md:px-6 rounded-3xl"> Group Gathering</div>
                            <div className="border border-white bg-white/20 text-white py-1 md:py-2 px-2 md:px-6 rounded-3xl"> Meeting</div>
                        </div>

                        <div className="border border-white bg-white text-primary-dark py-2 px-4 rounded-3xl w-full lg:w-3/6 text-sm hidden sm:flex">Discover flexible spaces for your next meeting or group gathering.</div>
                    </div>
                    <div className="relative">
                        <div className="absolute top-0 left-0 right-0 bottom-2 bg-primary-dark/40 z-10 rounded-3xl"></div>
                        <Slider {...{ dots: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, }}>
                            <div>
                                <img src="https://staging.bclusive.com/api/Upload/SpaceFront/Images/Wyndham%20Hotels%201.jpg" className="w-full rounded-3xl" />
                            </div>
                            <div>
                                <img src="https://staging.bclusive.com/api/Upload/SpaceFront/Images/Wyndham%20Hotels%201.jpg" className="w-full rounded-3xl" />
                            </div>
                        </Slider>
                    </div>
                    <div className="absolute left-4 bottom-4 right-4 flex items-start gap-4 justify-between z-10">
                        <p className="text-lg md:text-4xl lg:text-3xl text-white font-bold">Days Inn by <br />
                            Wyndham Edmonton Downtown</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 space-y-4">
                    <div className="relative">
                        <div className="absolute top-4 left-4 items-center gap-2 z-20 hidden sm:flex">
                            <div className="w-10 h-10 rounded-full bg-white hover:bg-white/80 cursor-pointer flex items-center justify-center p-2"><Image /></div>
                            <div className="w-10 h-10 rounded-full bg-white hover:bg-white/80 cursor-pointer flex items-center justify-center p-2"><Play /></div>
                            <div className="w-10 h-10 rounded-full bg-white hover:bg-white/80 cursor-pointer flex items-center justify-center p-2"><Rotate3D /></div>
                        </div>
                        <img src="https://staging.bclusive.com/api/Upload/SpaceFront/Images/Wyndham%20Hotels%202.jpg" className="w-full rounded-3xl brightness-75" />
                        <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start gap-2 z-20">

                            <p className="text-2xl font-semibold text-white">Wyndham Hotels & Resorts</p>
                            <div className="flex items-center gap-1">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                            </div>

                            <div className="flex items-center justify-between gap-2 w-full">
                                <div className="flex items-center justify-between  gap-2">
                                    <MapPin color="white" />
                                    <p className="font-plus text-xl text-white">Edmonton, Canada</p>
                                </div>
                                <p className="font-plus text-md underline text-white">Direction</p>

                            </div>

                        </div>
                    </div>

                    <div className=" items-center gap-2 z-20 flex sm:hidden">
                        <div className="w-10 h-10 rounded-full bg-primary-dark text-white hover:bg-primary-dark/80 cursor-pointer flex items-center justify-center p-2"><Image /></div>
                        <div className="w-10 h-10 rounded-full bg-primary-dark text-white hover:bg-primary-dark/80 cursor-pointer flex items-center justify-center p-2"><Play /></div>
                        <div className="w-10 h-10 rounded-full bg-primary-dark text-white hover:bg-primary-dark/80 cursor-pointer flex items-center justify-center p-2"><Rotate3D /></div>
                    </div>

                    <div className="bg-[#f4f4f4] p-4 rounded-3xl space-y-4">
                        <div className="flex items-center justify-between w-full">
                            <p className="font-plus font-semibold text-md">Date</p>
                            <p>Use Same date picker</p>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <p className="font-plus font-semibold text-md">Guest</p>
                            <input type="number" name="" id="" min={1} placeholder="eg:10" className="bg-transparent" />
                        </div>
                        <div className="w-full border border-primary-dark rounded-3xl flex items-center justify-center py-2 text-xl cursor-pointer">Book</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <div className="absolute right-4 top-4 z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" />
                                    <path d="M25.5385 14H14.4615C14.2068 14 14 14.2068 14 14.4615C14 14.7163 14.2068 14.9231 14.4615 14.9231H24.4241L14.1352 25.2122C13.955 25.3924 13.955 25.6845 14.1352 25.8648C14.2255 25.955 14.3434 26 14.4615 26C14.5797 26 14.6978 25.955 14.7878 25.8648L25.0769 15.5757V25.5385C25.0769 25.7932 25.2837 26 25.5385 26C25.7932 26 26 25.7932 26 25.5385V14.4615C26 14.2068 25.7932 14 25.5385 14Z" fill="white" />
                                </svg>
                            </div>
                            <img src="https://staging.bclusive.com/assets/images/Resort.jpeg" className="rounded-3xl w-full brightness-75" />
                            <p className="font-plus text-white absolute bottom-4 left-4">Edmonton, Canada</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-8 px-6 my-14">
                <p className="text-3xl font-semibold text-primary-dark">Overview</p>
                <p className="text-md">Located in the edge of Vermont, featured with the best view of Stowe, this studio apartment can be the best choice to spend daily activities with your beloved family and promised investment with high return. This villa features hardwood floors, brand new bathrooms, full dining room, spacious living room, and lovable indoor garden interior. Large windows applied for a ton of natural light and heat.</p>
            </section>
            <section className="flex flex-col gap-8 px-6 mb-14">
                <div className="bg-[#f4f1e8] rounded-3xl p-8">
                    <p className="text-3xl font-semibold text-primary-dark">Key Features</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-8">
                        <div className="p-4 border border-primary-dark/50 rounded-xl font-semibold">
                            11 Meeting Rooms
                        </div>
                        <div className="p-4 border border-primary-dark/50 rounded-xl font-semibold">
                            350 Person Max. Capacity
                        </div>
                        <div className="p-4 border border-primary-dark/50 rounded-xl font-semibold">
                            Breakout Area
                        </div>
                        <div className="p-4 border border-primary-dark/50 rounded-xl font-semibold">
                            Free Wi-Fi
                        </div>
                        <div className="p-4 border border-primary-dark/50 rounded-xl font-semibold">
                            High-quality AV Equipment
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-8 px-6 mb-14">
                <p className="text-3xl font-semibold text-primary-dark">What&apos;s Nearby</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <div className="flex items-start justify-start gap-2">
                        <MapPin />
                        <div >
                            <p className="text-xl">Worldmark</p>
                            <p className="text-sm text-gray-500">1 min walk</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start gap-2">
                        <MapPin />
                        <div >
                            <p className="text-xl">DLF Cyber City</p>
                            <p className="text-sm text-gray-500">1 min walk</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-8 px-6 mb-14">
                <p className="text-3xl font-semibold text-primary-dark">Getting Around</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <div className="flex items-start justify-start gap-2">
                        <Bus />
                        <div >
                            <p className="text-xl">Fleet St At Strachan Ave Stop</p>
                            <p className="text-sm text-gray-500">1 min walk</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-start gap-2">
                        <Bus />
                        <div >
                            <p className="text-xl">Exhibition Station</p>
                            <p className="text-sm text-gray-500">1 min walk</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-8 px-6 mb-14">
                <p className="text-3xl font-semibold text-primary-dark">FAQ&apos;s</p>
                <div className="rounded-lg">
                    {/* FAQ Item 1 */}
                    <div className="border-t-2 border-primary-dark">
                        <button className="flex justify-between w-full p-4 text-left focus:outline-none font-semibold" onClick={() => toggleFAQ(1)}>
                            <span>What is the check-in time?</span>
                            <span>{openFAQ === 1 ? '-' : '+'}</span>
                        </button>
                        {openFAQ === 1 && (
                            <div className="px-4 pb-2">
                                <p className=" text-sm text-gray-500">The check-in time is 3 PM.</p>
                            </div>
                        )}
                    </div>
                    {/* FAQ Item 2 */}
                    <div className="border-t-2 border-primary-dark">
                        <button className="flex justify-between w-full p-4 text-left focus:outline-none font-semibold" onClick={() => toggleFAQ(2)}>
                            <span>Is breakfast included?</span>
                            <span>{openFAQ === 2 ? '-' : '+'}</span>
                        </button>
                        {openFAQ === 2 && (
                            <div className="px-4 pb-2">
                                <p className=" text-sm text-gray-500">Yes, breakfast is included in your stay.</p>
                            </div>
                        )}
                    </div>
                    {/* Add more FAQ items as needed */}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ListingDetails;
