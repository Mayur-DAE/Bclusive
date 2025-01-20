/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./lastMinuteDeals.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";


const DealCard = ({ deal }) => (
    <article className="flex overflow-hidden relative z-0 flex-col border-white border-solid shadow-lg border-[12px] rounded-[30px] max-md:px-5 max-md:pt-24 h-[450px] cursor-pointer">
        <img
            loading="lazy"
            className="object-cover absolute inset-0 size-full rounded-lg"
            src={deal.imageUrl}
            alt={`${deal.title} Image`}
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 w-full bg-gradient-to-t from-[#001d3d] via-[#001d3d]/70 to-transparent"></div>
        <div className="absolute flex flex-col bottom-8 left-1/2 -translate-x-[50%] w-[80%] gap-3">
            <div className="box flex flex-col pb-8 !border-dotted !border-0 !border-b-[1px] border-white border-opacity-25">
                <h3 className="text-2xl font-bold leading-snug text-white">
                    {deal.title}
                </h3>
                <p className="mt-2.5 text-base leading-7 text-white text-opacity-80">
                    {deal.description}
                </p>
            </div>
            <div className="flex overflow-hidden gap-15 justify-between items-center mt-45 w-95% whitespace-nowrap">
                <div className="flex flex-col font-bold">
                    <div className="flex gap-2 items-start self-start">
                        <span className="text-2xl text-white">{deal.price}</span>
                        <span className="text-base text-white text-opacity-80">
                            +
                        </span>
                    </div>
                    <span className="text-lg text-white text-opacity-80">
                        Package
                    </span>
                </div>
                <ChevronRight size={50} className="text-white" />
            </div>
        </div>
    </article>
);

export const LastMinuteDeals = () => {
    const navigate = useNavigate();

    const deals = [
        {
            title: "Fairmont Vancouver",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            price: 18,
            imageUrl: "https://images.unsplash.com/photo-1683638865459-41fc0603e1b9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Executive Hotel",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            price: 38,
            imageUrl: "https://plus.unsplash.com/premium_photo-1661962360690-e91cc0df88f1?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "COQ Hotel",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
            price: 38,
            imageUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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

    const handleOnClick = () => {
        navigate("/packages");
    }

    return (
        <section className="last-minute-deals-wrapper bg-contain 2xl:bg-cover bg-no-repeat flex relative flex-col justify-center self-stretch pt-12 lg:pt-24 pb-12 md:px-12 lg:px-24 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="2xl:container mx-auto overflow-hidden gap-8 self-stretch w-full md:text-3xl lg:text-5xl font-bold text-white capitalize leading-[59px] max-md:max-w-full max-md:text-4xl relative z-10  mb-12">
                Weekend Steals: Last-Minute Deals
            </h2>

            <div className="hidden 2xl:container 2xl:mx-auto lg:grid grid-cols-3 gap-8" onClick={handleOnClick}>
                {deals.map((deal, index) => (
                    <DealCard key={index} deal={deal} />
                ))}
            </div>

            <div className="lg:hidden" onClick={handleOnClick}>
                <Slider {...settings}>
                    {deals.map((deal, index) => (
                        <DealCard key={index} deal={deal} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        >
            <ChevronRight size={30} className="text-white" />
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        >
            <ChevronLeft size={30} className="text-white" />
        </div>
    );
};