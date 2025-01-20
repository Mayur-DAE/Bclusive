import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ListingSpaceCard from "./components/listing/ListingSpaces";
import DatePicker from 'react-datepicker'; // Importing the date picker
import "react-datepicker/dist/react-datepicker.css"; // Importing styles for the date picker

export const Listings = () => {
    const [dateRange, setDateRange] = useState([null, null]); // State for date range
    const [isDatePickerOpen, setDatePickerOpen] = useState(false); // State to manage date picker visibility
    const types = [
        "Anniversary",
        "Baby shower",
        "Birthday party",
        "Bridal shower",
        "Class",
        "Cocktail conference",
        "Corporate event",
        "Dinner party",
        "Filming location",
        "Fundraiser",
        "Holiday party",
        "Launch party",
        "Meeting",
        "Other",
        "Party",
        "Photoshoot",
        "Private dining",
        "Rehearsal dinner",
        "Social event",
        "Wedding",
    ];
    const locations = [
        "Toronto",
        "Montreal",
        "Vancouver",
        "Ottawa - Gatineau",
    ];
    // Array of dummy data for ListingSpaceCard
    const listingsData = [
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Cozy Apartment",
            availability: "Available",
            rating: 4.5,
            reviews: 120,
            oldPrice: "$200",
            newPrice: "$150",
            discount: "25% off",
            location: { lat: 37.7749, lng: -122.4194 } // Example coordinates
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Modern Studio",
            availability: "Unavailable",
            rating: 4.0,
            reviews: 80,
            oldPrice: "$180",
            newPrice: "$140",
            discount: "22% off",
            location: { lat: 37.7849, lng: -122.4094 } // Example coordinates
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Luxury Villa",
            availability: "Available",
            rating: 5.0,
            reviews: 200,
            oldPrice: "$500",
            newPrice: "$400",
            discount: "20% off",
            location: { lat: 37.7949, lng: -122.3994 } // Example coordinates
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Cozy Apartment",
            availability: "Available",
            rating: 4.5,
            reviews: 120,
            oldPrice: "$200",
            newPrice: "$150",
            discount: "25% off",
            location: { lat: 37.7749, lng: -122.4194 } // Example coordinates
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Modern Studio",
            availability: "Unavailable",
            rating: 4.0,
            reviews: 80,
            oldPrice: "$180",
            newPrice: "$140",
            discount: "22% off",
            location: { lat: 37.7849, lng: -122.4094 } // Example coordinates
        },
        {
            imageUrl: "https://via.placeholder.com/150",
            title: "Luxury Villa",
            availability: "Available",
            rating: 5.0,
            reviews: 200,
            oldPrice: "$500",
            newPrice: "$400",
            discount: "20% off",
            location: { lat: 37.7949, lng: -122.3994 } // Example coordinates
        }
    ];

    return (
        <>
            <Header isHeaderVisible={true} />
            <div className="px-6 mt-8">
                <div className="flex flex-col md:flex-row items-center justify-start gap-2 w-full box-border mb-12">
                    <div className="px-2 flex items-center gap-2 w-full md:w-auto">
                        <p className="text-lg font-plus leading-normal font-semibold text-grey-scale-black-50">
                            Type
                        </p>
                        <select className="bg-transparent text-[#191825]/50 outline-none w-full md:w-auto">
                            <option>Select Type</option>
                            {types.map(t => {
                                return (
                                    <option key={t.replace(' ', '_')} className="text-primary-dark font-semibold">{t}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="px-2 flex items-center gap-2 relative w-full md:w-auto">
                        <p className="text-md font-plus leading-normal font-semibold text-grey-scale-black-50">
                            Date
                        </p>
                        <div onClick={() => setDatePickerOpen(true)} className="w-full md:w-auto">
                            <input
                                type="text"
                                placeholder="Check-in - Check-out"
                                onFocus={() => setDatePickerOpen(true)}
                                readOnly
                                value={dateRange[0] && dateRange[1] ? `${dateRange[0].toLocaleDateString()} - ${dateRange[1].toLocaleDateString()}` : ''}
                                className="w-full md:w-auto"
                            />
                        </div>
                        {isDatePickerOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border border-slate-300 shadow-lg z-[1000] p-4 rounded-xl bg-white ">
                                <DatePicker
                                    selected={dateRange[0]}
                                    onChange={(update) => {
                                        setDateRange(update);
                                        if (update[1]) {
                                            setDatePickerOpen(false);
                                        }
                                    }}
                                    startDate={dateRange[0]}
                                    endDate={dateRange[1]}
                                    selectsRange
                                    inline
                                />
                            </div>
                        )}
                    </div>
                    <div className="px-2 flex items-center gap-2 w-full md:w-auto">
                        <p className="text-lg font-plus leading-normal font-semibold text-grey-scale-black-50">
                            Location
                        </p>
                        <select className="bg-transparent text-[#191825]/50 outline-none w-full md:w-auto">
                            <option>Select Location</option>
                            {locations.map(l => {
                                return (
                                    <option key={l.replace(' ', '_')} className="text-primary-dark font-semibold">{l}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="px-2 w-full md:w-auto">
                        <div className="flex gap-2 items-center justify-center bg-primary-dark hover:bg-primary-dark/90 cursor-pointer text-white rounded-2xl h-[50px] py-2 px-6 w-full">
                            <p className="text-lg font-plus">
                                Search
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 col-span-12">
                        {listingsData.map((listing, index) => (
                            <ListingSpaceCard key={index} {...listing} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}