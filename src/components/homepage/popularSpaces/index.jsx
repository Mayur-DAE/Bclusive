import { MoveRight, MoveLeft } from "lucide-react";
import "./popularSpaces.css";
import { useState } from "react";

export const PopularSpaces = () => {
    const dummySlides = [
        {
            image: 'https://staging.bclusive.com/api/Upload/SpaceFront/Images/91330272_20241226013239.jpg',
            title: 'Conference Room A',
            location: 'New York, NY'
        },
        {
            image: 'https://via.placeholder.com/300x200.png?text=Room+2',
            title: 'Meeting Room B',
            location: 'San Francisco, CA'
        },
        {
            image: 'https://via.placeholder.com/300x200.png?text=Room+3',
            title: 'Board Room C',
            location: 'Chicago, IL'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = dummySlides.length;

    // Check if the screen is mobile-sized
    const isMobile = window.innerWidth < 768;

    const handleNext = () => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="p-6 2xl:container mx-auto">
            <section className="flex flex-col lg:flex-row gap-2 mt-16 w-full text-neutral-800">
                <h2 className="grow shrink self-start text-2xl font-bold leading-tight w-2/12">
                    POPULAR
                </h2>
                <p className="grow shrink text-2xl lg:text-4xl font-medium leading-tight lg:leading-10 w-full lg:w-10/12">
                    Each meeting room reservation is a tailored exploration waiting to
                    unfold.
                </p>
            </section>

            <section className="mt-10 w-full max-md:mt-10 max-md:max-w-full">
                <div className="relative overflow-hidden">
                    <div className={`flex ${isMobile ? 'transition-transform duration-300' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4'}`} style={{ transform: isMobile ? `translateX(-${currentSlide * 100}%)` : 'none' }}>
                        {dummySlides.map((s) => (
                            <article className="relative w-full flex-shrink-0" key={s.title}>
                                <div className="popular-spaces-wrapper w-full h-[300px]" style={{ backgroundImage: `url("${s.image}")` }}>
                                </div>
                                <div className="popular-btn flex gap-2 items-center justify-center bg-primary-dark text-white rounded-[40px] w-[45%] h-[47px] absolute bottom-[4.2rem] md:bottom-16 right-0">
                                    <p className="text-xl font-bold mb-1">
                                        View
                                    </p>
                                    <MoveRight />
                                </div>
                                <div className="mt-5">
                                    <p className="font-bold text-lg">{s.title}</p>
                                    <p className="text-gray-500 text-xs font-bold">{s.location}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    {isMobile && currentSlide > 0 && (
                        <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-primary-dark w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                            <MoveLeft />
                        </button>
                    )}
                    {isMobile && currentSlide < totalSlides - 1 && (
                        <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-primary-dark w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
                            <MoveRight />
                        </button>
                    )}
                </div>
            </section>
        </div>
    );
};
