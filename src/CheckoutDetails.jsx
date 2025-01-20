import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

export const CheckoutDetails = () => {
    return (
        <>
            <Header isHeaderVisible={true} />
            <section className="flex flex-col lg:flex-row lg:items-start">
                <div className="lg:w-1/12 lg:h-full p-1 order-3 lg:order-1 lg:border-r lg:space-y-2 flex lg:flex-col sticky left-0 right-0 bottom-0 justify-between lg:static bg-white">
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center justify-center rounded-lg  cursor-pointer">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/03cfb7d334b9d693114c421a62f742f9d4a587d49aa218e8d7af69996483e910?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc" className="object-contain w-8" />
                        <p className="text-xs font-bold">Service</p>
                    </div>
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center text-gray-400 justify-center bg-secondary rounded-lg cursor-pointer">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f84d6924e6946cc427b5615e141f2cbd05a7792fad40c780e319a99dbc3cbc05?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc" className="object-contain w-8" />
                        <p className="text-xs font-bold">Details</p>
                    </div>
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center text-gray-400 justify-center rounded-lg cursor-pointer">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a677e3c8405693884b9be6c17b8f3e3c2cdb4aef3004df50368a2dbc367c306?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc" className="object-contain w-8" />
                        <p className="text-xs font-bold">Food</p>
                    </div>
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center text-gray-400 justify-center rounded-lg cursor-pointer">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a677e3c8405693884b9be6c17b8f3e3c2cdb4aef3004df50368a2dbc367c306?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc" className="object-contain w-8" />
                        <p className="text-xs font-bold">Bar</p>
                    </div>
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center text-gray-400 justify-center rounded-lg cursor-pointer">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb335fd884401e0b0724e56fbdcb546d1a7defa9cecc5d8b2dc8bfd4c2b9b0ed?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc" className="object-contain w-8" />
                        <p className="text-xs font-bold">Guests</p>
                    </div>
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center text-gray-400 justify-center rounded-lg cursor-pointer">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/88f7991800e85ab2b468bcdf06c3fdd88393ca01d221ce74fa12d29997e54207?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc" className="object-contain w-8" />
                        <p className="text-xs font-bold">Confirmation</p>
                    </div>
                </div>
                <div className="lg:w-8/12 h-full lg:order-2 lg:border-r">
                    <div className="flex items-center gap-2 py-1 border-b pl-4">
                        <p className="tex-xs font-plus">Checkout</p>
                        <p className="text-secondary">/</p>
                        <p className="tex-xs font-plus text-gray-500">Details</p>
                    </div>

                    <div className="p-4">
                        <section className="flex flex-col w-full max-md:max-w-full">
                            <div className="flex overflow-hidden relative gap-3 items-center justify-center my-5 px-6 font-semibold bg-amber-100 rounded-lg min-h-[80px] max-md:flex-col max-md:gap-2 max-md:items-start max-md:px-4 max-md:py-3 max-md:mt-3 max-md:mr-2 max-md:ml-2">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/384a02901c6eade9872bd44750ddd216a73f555b3329fe70522f496ee5916b4e?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc"
                                    alt="Information icon"
                                    className="object-contain z-0 shrink-0 self-stretch my-auto aspect-square w-[42px] max-md:w-[36px] hidden lg:block"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f99de78ae89894ec5fcfad46c6dc2550e04d2a5f00502d356c0c181e78a591?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc"
                                    alt="Decorative element"
                                    className="object-contain absolute top-0 z-0 shrink-0 self-start aspect-[3.83] h-[26px] left-[230px] stroke-[15px] stroke-orange-200 w-[69px] max-md:left-[150px]"
                                />
                                <p className="self-stretch my-auto text-sm tracking-normal leading-loose min-w-[240px] text-neutral-800 w-full max-md:max-w-full max-md:text-center max-md:text-sm max-md:leading-normal z-10">
                                    Already a member? Log in now to book faster.
                                </p>
                                <button className="self-stretch px-8 py-2 my-auto text-base text-white whitespace-nowrap bg-neutral-800 rounded-[50px] max-md:w-full max-md:px-5 max-md:py-3 max-md:mt-3">
                                    Login
                                </button>
                            </div>
                        </section>

                        {/* User Details Form */}
                        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border rounded-xl px-2 py-4 mb-4">
                            <h2 className="font-bold text-lg col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4">User Details</h2>
                            <div className="flex flex-col">
                                <input type="text" placeholder="First Name" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                            <div className="flex flex-col">
                                <input type="text" placeholder="Last Name" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                            <div className="flex flex-col">
                                <input type="email" placeholder="Email" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                            <div className="flex flex-col">
                                <input type="text" placeholder="Country" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                            <div className="flex flex-col">
                                <input type="text" placeholder="Region" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                            <div className="flex flex-col">
                                <input type="text" placeholder="City" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                            <div className="flex flex-col">
                                <input type="text" placeholder="Postal Code" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                            <div className="flex flex-col">
                                <input type="text" placeholder="Company" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                            <div className="flex flex-col">
                                <input type="text" placeholder="Agency" className="border p-2 h-10 rounded-lg resize-none" />
                            </div>
                        </form>

                        {/* Payment Details Form */}
                        <div className="border rounded-xl px-2 py-4">
                            <h2 className="font-bold text-lg mt-6">Payment Detail</h2>
                            <p className="mt-2.5 text-xs tracking-tight max-md:max-w-full">Please fill out the form below. Enter your card account details.</p>
                            <form className="flex flex-col gap-4 mt-6">
                                <div className="flex flex-col">
                                    <label className="font-semibold text-gray-800 text-sm mb-2">Card Number</label>
                                    <input type="text" placeholder="1243 _ 2133 _ 9832 _ 3200" className="border p-2 h-10 rounded-lg resize-none" />
                                </div>
                                <div className="flex items-start justify-start gap-2 flex-wrap">

                                    <div className="flex flex-col">
                                        <label className="font-semibold text-gray-800 text-sm mb-2">Expire Month</label>
                                        <div className="flex gap-2">
                                            <select className="border p-2 h-10 rounded-lg resize-none">
                                                <option>Select Month</option>
                                                {/* Add month options here */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-semibold text-gray-800 text-sm mb-2">Expire Year</label>
                                        <div className="flex gap-2">
                                            <select className="border p-2 h-10 rounded-lg resize-none">
                                                <option>Select Year</option>
                                                {/* Add year options here */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="font-semibold text-gray-800 text-sm mb-2">CVC/CVV</label>
                                        <input type="text" placeholder="453" className="border p-2 h-10 rounded-lg resize-none" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/12 h-full lg:order-3 p-4">
                    <p className="font-bold text-lg">Order details</p>
                </div>
            </section>
            <Footer />
        </>

    )
}
