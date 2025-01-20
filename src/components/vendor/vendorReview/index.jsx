import { ChevronDown } from "lucide-react";

export const VendorReview = () => {
    const reviewers = [
        { id: 1, name: "Bella Morgan", time: "24min ago", imageSrc: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de" },
        { id: 2, name: "Louis Pattinson", time: "24min ago", imageSrc: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de" },
        { id: 3, name: "Hans Takeshi", time: "24min ago", imageSrc: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de", isActive: true },
        { id: 4, name: "Demian Sarumaha", time: "24min ago", imageSrc: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de" },
        { id: 5, name: "Bella Morgan", time: "24min ago", imageSrc: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de" }
    ];

    const tags = ["Great Service", "Recomended", "Best Price"];

    return (
        <div className="flex flex-col rounded-none px-4 lg:px-0">
            <div className="flex flex-col px-9 py-7 w-full bg-white rounded-2xl shadow-sm max-md:px-5 max-md:max-w-full">
                <div className="flex flex-wrap gap-5 justify-between w-full font-medium max-w-[1168px] text-zinc-800 max-md:max-w-full">
                    <div className="self-start text-2xl">Customer Reviews</div>
                    <button className="flex gap-2.5 items-start px-6 py-4 text-sm leading-loose rounded-2xl border border-gray-200 border-solid max-md:px-5">
                        <span>Sort by Newest</span>
                        <ChevronDown />
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 justify-between mt-3 max-md:max-w-full">
                    <div className="flex flex-col w-full lg:w-4/12 h-[300px] lg:h-[400px] overflow-y-auto">
                        {reviewers.map((reviewer) => (
                            <div key={reviewer.id} className={`cursor-pointer flex gap-5 py-2 mb-2 pl-5 rounded-2xl ${reviewer.isActive ? 'bg-zinc-100' : 'bg-white'} hover:bg-zinc-100 max-md:pr-5`}>
                                <img
                                    loading="lazy"
                                    src={reviewer.imageSrc}
                                    alt={`Profile picture of ${name}`}
                                    className="object-cover rounded-full w-[62px] h-[62px]"
                                />
                                <div className="flex flex-col self-start">
                                    <div className="text-lg font-medium text-zinc-800">{reviewer.name}</div>
                                    <div className="self-start text-xs text-zinc-500">{reviewer.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-start self-start mt-1.5 lg:w-8/12">
                        <div className="text-xl font-medium text-zinc-800">
                            I love that room service
                        </div>
                        <div className="flex gap-px items-center self-stretch mt-4">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                    <path d="M4.90329 1.01718C5.2701 0.273934 6.32995 0.273936 6.69676 1.01718L7.44827 2.5399C7.59393 2.83504 7.87549 3.03961 8.2012 3.08694L9.88163 3.33112C10.7018 3.4503 11.0294 4.45828 10.4358 5.03681L9.21987 6.22208C8.98419 6.45182 8.87664 6.78282 8.93228 7.10721L9.21933 8.78085C9.35944 9.59775 8.50201 10.2207 7.76838 9.83502L6.26537 9.04484C5.97404 8.89168 5.62601 8.89168 5.33468 9.04484L3.83167 9.83502C3.09804 10.2207 2.24061 9.59775 2.38072 8.78084L2.66777 7.10721C2.72341 6.78282 2.61586 6.45182 2.38017 6.22208L1.16421 5.03681C0.570694 4.45828 0.898205 3.4503 1.71843 3.33112L3.39884 3.08694C3.72456 3.03961 4.00612 2.83504 4.15178 2.5399L4.90329 1.01718Z" fill="#F4C700" />
                                </svg>
                            ))}
                        </div>
                        <div className="self-stretch mt-6 text-sm leading-7 text-zinc-800 max-md:max-w-full">
                            We were totally refreshed and rejuvenated for the whole of next
                            year and it was due to the relaxing stay at the hotel. The hotel
                            is absolutely marvelous! We liked absolutely everything, starting
                            from the breakfast through to the perfect room service including
                            the cleanliness and extra services such as dry cleaning and
                            laundry. In general all the staff at the hotel were professional,
                            friendly and provided excellent service. We will return for sure
                        </div>
                        <div className="flex flex-wrap gap-5 lg:justify-between mt-7 mb-4 max-w-full">
                            {tags.map((tag, index) => (
                                <div key={index} className="gap-2 px-2 py-1 rounded-2xl bg-zinc-100 text-sm leading-7 text-zinc-500">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <div className={`flex gap-5 py-4 pr-16 pl-5 rounded-2xl 'bg-white' max-md:pr-5`}>
                            <img
                                loading="lazy"
                                src={'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de'}
                                alt={`Profile picture of ${name}`}
                                className="object-cover  rounded-full w-[62px] h-[62px]"
                            />
                            <div className="flex flex-col self-start">
                                <div className="text-lg font-medium text-zinc-800">Hans Takeshi</div>
                                <div className="self-start text-xs text-zinc-500">24min ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
