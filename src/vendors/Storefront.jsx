import './homepage.css';
import { VendorHeader } from "../components/vendor/VendorHeader";
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router';

export const StoreFront = () => {
    // Dummy data for hotels
    const hotels = [
        {
            id: 'R-001235',
            capacity: 20,
            type: 'Meeting Room',
            name: 'Weimann Junctions',
            isAvailable: true,
            reviews: 245,
            image: 'https://plus.unsplash.com/premium_photo-1702598411521-ab6603e705b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
        },
        {
            id: 'R-001235',
            capacity: 20,
            type: 'Meeting Room',
            name: 'Weimann Junctions',
            isAvailable: true,
            reviews: 245,
            image: 'https://plus.unsplash.com/premium_photo-1702598411521-ab6603e705b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
        },
        {
            id: 'R-001235',
            capacity: 20,
            type: 'Meeting Room',
            name: 'Weimann Junctions',
            isAvailable: false,
            reviews: 245,
            image: 'https://plus.unsplash.com/premium_photo-1702598411521-ab6603e705b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
        },
        {
            id: 'R-001235',
            capacity: 20,
            type: 'Meeting Room',
            name: 'Weimann Junctions',
            isAvailable: true,
            reviews: 245,
            image: 'https://plus.unsplash.com/premium_photo-1702598411521-ab6603e705b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
        },
        {
            id: 'R-001235',
            capacity: 20,
            type: 'Meeting Room',
            name: 'Weimann Junctions',
            isAvailable: false,
            reviews: 245,
            image: 'https://plus.unsplash.com/premium_photo-1702598411521-ab6603e705b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Placeholder image URL
        },
    ];

    const navigate = useNavigate();

    return (
        <div className='bg-gray-100 min-h-screen'>
            <VendorHeader />
            <div className='pb-12'>
                <div className='py-2 px-4 flex w-full justify-end bg-white mb-4'>
                    <button
                        className='bg-primary-dark text-white text-base font-bold flex items-center gap-2 py-2 px-4 rounded-md hover:bg-primary-dark/80'
                        onClick={() => navigate('/vendor/add-space')}
                    >
                        <Plus />   Add Space
                    </button>
                </div>
                {/* Displaying hotel information */}
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12 p-2 lg:p-0'>
                        {hotels.map(hotel => (
                            <div key={hotel.id}>
                                <div className='relative mb-2'>
                                    <img src={hotel.image} alt={`Image of ${hotel.id}`} className='w-full h-[330px] object-cover rounded-2xl brightness-50' />

                                    <div className='absolute left-4 right-4 bottom-4'>
                                        <p className={`text-white rounded-xl px-4 py-1 mb-4 w-fit ${hotel.isAvailable ? 'bg-green-700' : 'bg-red-700'}`}>{hotel.isAvailable ? 'Available' : 'Booked'}</p>

                                        <h3 className='text-white text-lg font-bold mb-2'>{hotel.name}</h3>
                                        <p className='text-white text-xs'>#{hotel.id}</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between gap-4'>
                                    <div className="flex gap-px items-center self-stretch">
                                        <span className='text-xl mr-2 font-semibold'>4</span>
                                        {[1, 2, 3, 4].map((index) => (
                                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                                <path d="M4.90329 1.01718C5.2701 0.273934 6.32995 0.273936 6.69676 1.01718L7.44827 2.5399C7.59393 2.83504 7.87549 3.03961 8.2012 3.08694L9.88163 3.33112C10.7018 3.4503 11.0294 4.45828 10.4358 5.03681L9.21987 6.22208C8.98419 6.45182 8.87664 6.78282 8.93228 7.10721L9.21933 8.78085C9.35944 9.59775 8.50201 10.2207 7.76838 9.83502L6.26537 9.04484C5.97404 8.89168 5.62601 8.89168 5.33468 9.04484L3.83167 9.83502C3.09804 10.2207 2.24061 9.59775 2.38072 8.78084L2.66777 7.10721C2.72341 6.78282 2.61586 6.45182 2.38017 6.22208L1.16421 5.03681C0.570694 4.45828 0.898205 3.4503 1.71843 3.33112L3.39884 3.08694C3.72456 3.03961 4.00612 2.83504 4.15178 2.5399L4.90329 1.01718Z" fill="#F4C700" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className='text-sm text-gray-500'>{hotel.reviews} Reviews</p>
                                </div>
                                <div className='flex items-center justify-between gap-4 mt-2 pb-2 border-b border-gray-200'>
                                    <p className='text-sm text-gray-500'>Capacity</p>
                                    <p className='text-sm text-gray-500'>{hotel.capacity}</p>
                                </div>
                                <div className='flex items-center justify-between gap-4 mt-2'>
                                    <p className='text-sm text-gray-500'>Type</p>
                                    <p className='text-sm text-gray-500'>{hotel.type}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

