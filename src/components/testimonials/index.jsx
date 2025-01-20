import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react'
import './testimonial.css'

export const Testimonials = () => {
    const data = [
        {
            id: 1,
            review: "Bclusive has been a game-changer for me. The community here is so welcoming, the amenities are good!",
            name: "Sarah Johnson",
            service: "Meeting Room Client"
        },
        {
            id: 2,
            review: "The environment is perfect for productivity. I love the flexibility and the support from the staff.",
            name: "John Doe",
            service: "Coworking Space Client"
        },
        // Add more reviews as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const currentReview = data[currentIndex];

    return (
        <div className='p-4 md:p-6 mb-6 relative'>
            <div key={currentReview.id} className='testimonial-wrapper py-3 md:py-6 lg:py-8 px-4 h-60 md:h-[20rem] flex items-start justify-between transition-opacity duration-500 ease-in-out'>
                <p className='text-xl md:text-3xl lg:text-4xl font-semibold text-white max-w-full md:max-w-xl'>{currentReview.review}</p>
            </div>
            <div className='absolute bottom-8 left-8 md:bottom-6'>
                <p className='text-2xl text-white md:text-black font-bold'>{currentReview.name}</p>
                <p className='text-sm text-slate-50 md:text-black'>{currentReview.service}</p>
            </div>

            <div className='absolute right-8 md:top-1/2 bottom-2 -translate-y-1/2 md:h-3/4 px-2 py-2 md:py-4 rounded-full md:w-12 w-1/4 bg-gradient-to-b from-slate-300/30 to-gray-400/30 flex md:flex-col items-center justify-between'>
                <ArrowUp className='cursor-pointer text-white hover:text-slate-300' onClick={handlePrevious} />
                <ArrowDown className='cursor-pointer text-white hover:text-slate-300' onClick={handleNext} />
            </div>
        </div>
    )
}
