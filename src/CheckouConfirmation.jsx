import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

export const CheckouConfirmation = () => {
    return (
        <>
            <Header isHeaderVisible={true} />
            <section className="flex flex-col lg:flex-row lg:items-start">
                <div className="lg:w-1/12 lg:h-full p-1 order-3 lg:order-1 lg:border-r lg:space-y-2 flex lg:flex-col sticky left-0 right-0 bottom-0 justify-between lg:static bg-white">
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center justify-center rounded-lg cursor-pointer">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/03cfb7d334b9d693114c421a62f742f9d4a587d49aa218e8d7af69996483e910?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc" className="object-contain w-8" />
                        <p className="text-xs font-bold">Service</p>
                    </div>
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center text-gray-400 justify-center rounded-lg cursor-pointer">
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
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center bg-secondary text-gray-400 justify-center rounded-lg cursor-pointer">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/88f7991800e85ab2b468bcdf06c3fdd88393ca01d221ce74fa12d29997e54207?placeholderIfAbsent=true&apiKey=9e49b58a7e994d68a5274d6ef17143bc" className="object-contain w-8" />
                        <p className="text-xs font-bold">Confirmation</p>
                    </div>
                </div>
                <div className="lg:w-8/12 h-full lg:order-2 lg:border-r">
                    <div className="flex items-center gap-2 py-1 border-b pl-4">
                        <p className="tex-xs font-plus">Checkout</p>
                        <p className="text-secondary">/</p>
                        <p className="tex-xs font-plus text-gray-500">Services</p>
                    </div>

                    {/* Main Content */}
                    <div className="p-4">


                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1 space-y-6 mt-4 sm:mt-6 lg:mt-8 xl:px-6">
                                {/* Book Information */}
                                <div className="bg-white rounded-lg p-6 border">
                                    <h2 className="text-xl font-semibold mb-4">Book Information</h2>
                                    <div className="bg-[#DCF5D4] p-4 rounded-md flex items-start gap-2 mb-4">
                                        <i className="fas fa-check-circle text-green-500 text-xl"></i>
                                        <p className="text-justify">Congratulations! We have sent your book details to the vehicle owner.</p>
                                    </div>
                                    <hr className="mb-4" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-600">Full Name</p>
                                            <p className="font-semibold">Ahmed Ben Ali</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Contact Number</p>
                                            <p className="font-semibold">221402040785</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Email</p>
                                            <p className="font-semibold md:truncate">ahmed@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="bg-white rounded-lg p-6 border">
                                    <h2 className="text-xl font-semibold mb-4">Services</h2>
                                    <hr className="mb-4" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold">Screen Connectivity</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Screen</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Food */}
                                <div className="bg-white rounded-lg p-6 border">
                                    <h2 className="text-xl font-semibold mb-4">Food</h2>
                                    <hr className="mb-4" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-semibold">Lunch Time: 11am to 1:30pm</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Dinner Time: 5pm to 10pm</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cancelation Policy */}
                                <div className="bg-white rounded-lg p-6 border">
                                    <h2 className="text-xl font-semibold mb-4">Cancelation Policy</h2>
                                    <p className="text-gray-700 mb-4 text-justify flex items-start">
                                        <img src="https://staging.bclusive.com/assets/images/can.jpg" alt="Icon" className="h-8 w-8 mr-2 mt-1" />
                                        <span>
                                            At Bclusive, we understand that plans can change unexpectedly. Modify or cancel your reservation without incurring fees up to 12 hours before your scheduled pick-up time.
                                        </span>
                                    </p>
                                    <a href="#" className="text-blue-500 font-semibold">See More</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* Summary */}
                <div className="lg:w-3/12 h-full lg:order-3 p-4">
                    <div className="w-full space-y-6">
                        {/* Summary */}
                        <div className="bg-white">
                            <h2 className="text-xl font-semibold mb-4">Summary</h2>
                            <hr className="mb-4" />
                            <div className="space-y-4 lg:space-y-2 sm:space-y-0">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start xl:flex-row xl:justify-between">
                                    <p>Total Meeting Rooms</p>
                                    <p className="font-semibold">1 Hall</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start xl:flex-row xl:justify-between">
                                    <p>Check In Date</p>
                                    <p className="font-semibold">Mon, 4 Feb 2024 - 10:00</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start xl:flex-row xl:justify-between">
                                    <p>Checkout Date</p>
                                    <p className="font-semibold">Thu, 8 Feb 2024 - 10:00</p>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <h3 className="text-lg font-semibold mb-4">Price Details</h3>
                            <div className="space-y-4 lg:space-y-2 sm:space-y-0">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start xl:flex-row xl:justify-between">
                                    <p>Trip Price</p>
                                    <p className="font-semibold">CAD 545/day</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start xl:flex-row xl:justify-between">
                                    <p>Duration</p>
                                    <p className="font-semibold">2 Days</p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start xl:flex-row xl:justify-between">
                                    <p>Tax</p>
                                    <p className="font-semibold">CAD 50</p>
                                </div>
                            </div>
                            <hr className="my-4" />
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:flex-col lg:items-start xl:flex-row xl:justify-between">
                                <p className="font-semibold">Total</p>
                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-tag fa-rotate-90" style={{ color: '#FFD43B' }}></i>
                                    <p className="font-semibold">USD 1,850.00</p>
                                </div>
                            </div>
                        </div>

                        {/* Booking Information */}
                        <div className="bg-white rounded-lg p-6 border">
                            <p className="text-justify">
                                **Please note: The booking will hold for 15 minutes until payment is completed. An email will be sent for confirmation!
                            </p>
                        </div>

                        {/* Terms and Payment */}
                        <div className="bg-white rounded-lg p-6 border">
                            <label className="flex items-start gap-2">
                                <input type="checkbox" className="form-checkbox text-blue-500 scale-125" />
                                <span className="text-sm">
                                    By clicking this, I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
                                </span>
                            </label>
                            <button className="w-full mt-4 bg-black text-white py-2 rounded-lg">Pay for My Booking</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}
