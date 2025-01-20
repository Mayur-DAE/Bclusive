import { Heart } from "lucide-react";

/* eslint-disable react/prop-types */
const VendorStats = ({ title, count, period, hasReviewDetails }) => {
    return (
        <div className="flex flex-col self-stretch my-auto rounded-none w-full h-full">
            <div className="flex flex-col py-6 w-full h-full bg-white rounded-2xl border border-gray-400">
                <div className="flex gap-5 justify-between mx-6 text-base font-bold tracking-tight text-black max-md:mx-2.5 border-b pb-4">
                    <div>{title}</div>
                </div>

                <div className="flex gap-8 mx-6 items-center justify-between mt-3.5 max-md:mx-2.5">
                    <div className="flex flex-1 gap-3.5">
                        <div className="text-3xl font-bold tracking-tight text-black">
                            {count}
                        </div>
                        <div className="my-auto text-xs tracking-normal leading-3 text-neutral-400">
                            {period}
                        </div>
                    </div>
                    {hasReviewDetails && (
                        <div className="">
                            <div className="flex flex-col">
                                <div className="flex gap-1 justify-center items-center px-3.5 py-1 text-xs font-bold tracking-normal leading-none text-red-500 bg-slate-200 rounded-[45px]">
                                    <Heart size={12} />
                                    <div className="self-stretch my-auto">65 Reviews</div>
                                </div>
                                <div className="flex gap-2 justify-start items-center mt-2">
                                    <div className="grow self-end text-xs leading-relaxed text-neutral-500">
                                        4.6/5
                                    </div>
                                    <div className="flex gap-px items-center self-stretch my-auto">
                                        {[1, 2, 3, 4, 5].map((index) => (
                                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                                <path d="M4.90329 1.01718C5.2701 0.273934 6.32995 0.273936 6.69676 1.01718L7.44827 2.5399C7.59393 2.83504 7.87549 3.03961 8.2012 3.08694L9.88163 3.33112C10.7018 3.4503 11.0294 4.45828 10.4358 5.03681L9.21987 6.22208C8.98419 6.45182 8.87664 6.78282 8.93228 7.10721L9.21933 8.78085C9.35944 9.59775 8.50201 10.2207 7.76838 9.83502L6.26537 9.04484C5.97404 8.89168 5.62601 8.89168 5.33468 9.04484L3.83167 9.83502C3.09804 10.2207 2.24061 9.59775 2.38072 8.78084L2.66777 7.10721C2.72341 6.78282 2.61586 6.45182 2.38017 6.22208L1.16421 5.03681C0.570694 4.45828 0.898205 3.4503 1.71843 3.33112L3.39884 3.08694C3.72456 3.03961 4.00612 2.83504 4.15178 2.5399L4.90329 1.01718Z" fill="#F4C700" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VendorStats;