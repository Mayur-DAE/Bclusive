import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

export const CheckoutServices = () => {
    return (
        <>
            <Header isHeaderVisible={true} />
            <section className="flex flex-col lg:flex-row lg:items-start">
                <div className="lg:w-1/12 lg:h-full p-1 order-3 lg:order-1 lg:border-r lg:space-y-2 flex lg:flex-col sticky left-0 right-0 bottom-0 justify-between lg:static bg-white">
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center justify-center rounded-lg bg-secondary cursor-pointer">
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
                    <div className="flex flex-col gap-2 hover:bg-secondary p-2 items-center text-gray-400 justify-center rounded-lg cursor-pointer">
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

                    <div className="p-4">
                        <section className="flex flex-col self-center pr-2 pl-2 pb-4 mt-4 max-l:mb-8 max-w-full min-h-auto text-neutral-800 w-[980px] max-sm:border-b border-solid border-b-neutral-200"><h5 className="self-start text-lg text-zinc-900">Equipment</h5><div className="flex max-sm:overflow-x-auto max-sm:flex-nowrap flex-wrap gap-8 items-center mt-9 text-sm text-white max-md:max-w-full"><button className="flex flex-col self-stretch my-auto max-md:text-base whitespace-nowrap rounded-3xl bg-gray-100 text-black border ng-star-inserted"><div className="flex flex-col justify-center items-center font-black px-6 py-3.5 rounded-3xl border-solid"><span >Screen Connectivity</span></div></button><button className="flex flex-col self-stretch my-auto max-md:text-base whitespace-nowrap rounded-3xl bg-gray-100 text-black border ng-star-inserted"><div className="flex flex-col justify-center items-center font-black px-6 py-3.5 rounded-3xl border-solid"><span >Screen</span></div></button><button className="flex flex-col self-stretch my-auto max-md:text-base whitespace-nowrap rounded-3xl bg-gray-100 text-black border ng-star-inserted"><div className="flex flex-col justify-center items-center font-black px-6 py-3.5 rounded-3xl border-solid"><span >Flipchart</span></div></button></div></section>
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
