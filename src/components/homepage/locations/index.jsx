import { MoveRight, MoveLeft } from "lucide-react";
import { useState, useEffect } from "react";

const cityData = [
    {
        name: "Edmonton",
        imageUrl: "https://staging.bclusive.com/api/Upload/Cities/Edmonton.png",
    },
    {
        name: "Vancouver",
        imageUrl: "https://staging.bclusive.com/api/Upload/Cities/Vancouver.png",
    },
    {
        name: "Toronto",
        imageUrl: "https://staging.bclusive.com/api/Upload/Cities/Toronto.png",
    },
    {
        name: "Montreal",
        imageUrl: "https://staging.bclusive.com/api/Upload/Cities/Montreal.png",
    },
];

export const Locations = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);

    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth >= 1024) {
                setVisibleSlides(4); // Laptop
            } else if (window.innerWidth >= 768) {
                setVisibleSlides(2); // Tablet
            } else {
                setVisibleSlides(1); // Mobile
            }
        };

        updateVisibleSlides();
        window.addEventListener("resize", updateVisibleSlides);
        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    const handleNext = () => {
        if (currentSlide < cityData.length - visibleSlides) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <section className="2xl:container mx-auto mt-20 w-full max-md:mt-10 max-md:max-w-full flex flex-col gap-16 p-6 mb-12">
            <div className="flex gap-5 max-md:flex-col">
                <h2 className="text-2xl font-semibold leading-tight text-neutral-800 w-[16%] max-md:w-full max-md:mt-10">
                    BASED ON CITIES
                </h2>
                <p className="text-2xl md:text-4xl font-medium md:leading-10 text-neutral-800 w-[84%] max-md:w-full max-md:mt-6 max-md:max-w-full">
                    Every meeting is a narrative in the making. Join us as we embark on
                    unforgettable discussions in cities across Canada.
                </p>
            </div>
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300 gap-4"
                    style={{ transform: `translateX(-${(currentSlide * 100) / visibleSlides}%)` }}
                >
                    {cityData.map((city, index) => (
                        <article
                            key={index}
                            className="flex-shrink-0"
                            style={{ width: `calc(${100 / visibleSlides}% - 1rem)` }} // Adjust width to account for gap
                        >
                            <div className="flex flex-col grow text-white whitespace-nowrap">
                                <div className="flex relative flex-col w-full aspect-[1.033] rounded-[45px] max-md:pt-24 cursor-pointer">
                                    <img
                                        loading="lazy"
                                        alt={`${city.name} cityscape`}
                                        className="object-cover absolute inset-0 size-full rounded-[45px]"
                                        src={city.imageUrl}
                                    />
                                    <a className="flex absolute bottom-4 left-1/2 -translate-x-[50%] flex-col justify-center px-2 md:px-4 !py-4 w-11/12 rounded-[30px] max-md:px-5 backdrop-blur-xl bg-neutral-700 bg-opacity-25">
                                        <div className="flex gap-3.5 justify-between items-center">
                                            <span className="self-stretch text-2xl font-semibold text-center leading-none mb-1">
                                                {city.name}
                                            </span>
                                            <MoveRight />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                {currentSlide > 0 && (
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    >
                        <MoveLeft />
                    </button>
                )}
                {currentSlide < cityData.length - visibleSlides && (
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    >
                        <MoveRight />
                    </button>
                )}
            </div>
        </section>
    );
};