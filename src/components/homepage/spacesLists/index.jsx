import { MoveRight } from 'lucide-react';
import Slider from 'react-slick';
import './spacesLists.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

export const SpacesLists = () => {
    const data = [
        {
            id: 1,
            title: 'Meeting Rooms',
            desc: "Ideal venues for meetings, collaboration, and interviews. Accessible on an hourly basis, with our on-site team ready to assist you.",
            img: "https://staging.bclusive.com/api/Upload/SpaceType/Metting%20Room.jpg"
        },
        {
            id: 2,
            title: 'Training Room',
            desc: "Ideal for when you require a dedicated space equipped with desks, whiteboards, and screens specifically tailored for training sessions.",
            img: "https://cdn.zeplin.io/66f8014e448d745cf150b46b/assets/e0f1802f-7f9d-4e6f-88e3-5073a8716572.png"
        },
        {
            id: 3,
            title: 'Boardrooms',
            desc: "A professional on-demand office space. Ideal for when you need to focus and produce your best work.",
            img: "https://staging.bclusive.com/api/Upload/SpaceType/Training%20Room.jpeg"
        },
        {
            id: 4,
            title: 'Need a helping hand?',
            desc: "Book a 1:1 call with an advisor to discuss options, get a quote, sign up, and start with expert help.",
            img: "https://staging.bclusive.com/api/Upload/SpaceFront/Images/Wyndham%20Hotels%202.jpg"
        }
    ];

    const isMobile = useMediaQuery({ maxWidth: 1114 });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 1114,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },
        ],
    };

    const renderContent = () => (
        data.map((s, i) => (
            <div key={s.id} className='relative cursor-pointer p-6 lg:p-0'>
                <div className={`${i === 0 ? 'spaceListFirst-wrapper' : 'spaceListRest-wrapper'} h-[360px] sm:h-[450px] lg:h-[400px] w-full bg-cover bg-no-repeat bg-bottom p-4 mb-6`} style={{ backgroundImage: `url('${s.img}')` }}>
                </div>
                {i === 0 ? (
                    <div className='absolute right-6 top-6 lg:right-0 lg:top-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-28 lg:h-28 rounded-full p-4 flex items-center justify-center bg-primary-dark text-white text-center'> View Available Dates</div>
                ) : (
                    <div className='absolute right-4 top-4 lg:right-0 lg:top-0 w-12 h-12 lg:w-10 lg:h-10 rounded-full p-1 flex items-center justify-center bg-primary-dark text-white text-center text-2xl'>
                        <MoveRight />
                    </div>
                )}
                <p className='text-2xl font-semibold mb-2 leading-10 text-primary-dark'>{s.title}</p>
                <p className='text-primary-dark/75 text-base leading-5'>{s.desc}</p>
            </div>
        ))
    );

    return (
        <div className='2xl:container mx-auto'>
            <h3 className='text-primary-dark text-4xl lg:text-5xl mb-8 lg:mb-12 w-full text-center font-semibold leading-[56px]'>Explore Spaces</h3>
            <section className="overflow-hidden">
                {isMobile ? (
                    <Slider {...settings} className="mb-24">
                        {renderContent()}
                    </Slider>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-6 mb-24">
                        {renderContent()}
                    </div>
                )}
            </section>
        </div>
    );
}
