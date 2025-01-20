import { Search, X } from "lucide-react";
import "./herosection.css";
import { useState } from "react";
import DatePicker from 'react-datepicker'; // Importing the date picker
import "react-datepicker/dist/react-datepicker.css"; // Importing styles for the date picker

const HeroSection = () => {
    const [showSearchInput, setShowSearchInput] = useState(false);
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


    return (

        <div className="lg:px-6 relative">
            <img className="absolute top-5 left-7 h-6" src='https://staging.bclusive.com/assets/img/Logos.png' />
            <div
                className="hero-section-wrapper relative flex flex-col justify-end h-svh w-full bg-cover bg-blend-overlay md:px-6 lg:pl-10"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1503418895522-46f9804cda40?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
            >
                <div className="hidden absolute top-4 right-10 lg:flex items-center justify-end gap-4">
                    <select className="bg-transparent text-white/80 outline-none w-24">
                        <option>Location</option>
                        {locations.map(t => {
                            return (
                                <option key={t.replace(' ', '_')} className="text-primary-dark font-semibold">{t}</option>
                            )
                        })}
                    </select>
                    {showSearchInput && (
                        <div className="flex items-center">
                            <input
                                type="text"
                                className="bg-transparent text-white/80 outline-none border-b border-white/80"
                                placeholder="Search..."
                            />
                            <X
                                className="text-white/80 cursor-pointer ml-2"
                                size={20}
                                onClick={() => setShowSearchInput(false)}
                            />
                        </div>
                    )}
                    {!showSearchInput && (
                        <Search
                            className="text-white/80 cursor-pointer"
                            size={20}
                            onClick={() => setShowSearchInput(true)}
                        />
                    )}

                    <div className="popular-btn flex gap-2 items-center justify-center bg-primary-dark text-white rounded-[40px] h-[40px] px-6 py-2">
                        <p className="font-plus text-md">
                            SignUp
                        </p>
                    </div>
                    <div className="popular-btn flex gap-2 items-center justify-center bg-secondary text-primary-dark rounded-[40px] h-[40px] px-6 py-2">
                        <p className="font-plus text-md">
                            Login
                        </p>
                    </div>

                </div>
                <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 bg-primary-dark/40 -z-10"></div>
                <h1 className="text-4xl md:text-[80px] text-white font-semibold md:leading-[88px] mb-2">
                    Work Better,
                </h1>
                <div className="flex items-center justify-start gap-5 mb-12">
                    <div className="lg:flex hidden items-center gap-2 h-14 box-border w-fit p-2 bg-[#d9d9d9]/50 rounded-3xl backdrop-blur-sm">
                        <div className="flex -space-x-2 overflow-hidden p-3">
                            <img
                                className="inline-block size-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="inline-block size-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="inline-block size-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                alt=""
                            />
                            <img
                                className="inline-block size-8 rounded-full ring-2 ring-white"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-[80px] text-white font-semibold md:leading-[88px] mb-2">
                        Together
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-2 w-full lg:w-[70%] box-border mb-12 p-4 bg-[#d9d9d9]/80 rounded-[20px] lg:divide-x-2 divide-[#dcdceb] backdrop-blur-sm">
                    <div className="space-y-4 px-2">
                        <p className="text-lg font-plus leading-normal font-semibold text-grey-scale-black-50">
                            Type
                        </p>
                        <select className="bg-transparent text-[#191825]/50 outline-none">
                            <option>Select Type</option>
                            {types.map(t => {
                                return (
                                    <option key={t.replace(' ', '_')} className="text-primary-dark font-semibold">{t}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="space-y-4 px-2">
                        <div className="flex flex-col items-start gap-2 w-full md:w-auto">
                            <p className="text-md font-plus leading-normal font-semibold text-grey-scale-black-50">
                                Date
                            </p>
                            <div onClick={() => setDatePickerOpen(true)}>
                                <input
                                    type="text"
                                    placeholder="In - Out"
                                    onFocus={() => setDatePickerOpen(true)}
                                    readOnly
                                    value={dateRange[0] && dateRange[1] ? `${dateRange[0].toLocaleDateString()} - ${dateRange[1].toLocaleDateString()}` : ''}
                                    className="bg-transparent"
                                />
                            </div>
                            {isDatePickerOpen && (
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 border border-slate-300 shadow-lg z-[9999] p-4 rounded-xl bg-white ">
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
                    </div>
                    <div className="space-y-4 px-2">
                        <p className="text-lg font-plus leading-normal font-semibold text-grey-scale-black-50">
                            Location
                        </p>
                        <select className="bg-transparent text-[#191825]/50 outline-none">
                            <option>Select Location</option>
                            {locations.map(l => {
                                return (
                                    <option key={l.replace(' ', '_')} className="text-primary-dark font-semibold">{l}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="px-2">
                        <div className="flex gap-2 items-center justify-center bg-primary-dark hover:bg-primary-dark/90 cursor-pointer text-white rounded-2xl h-[56px] py-2 px-4">
                            <p className="text-lg font-plus">
                                Book Now
                            </p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 right-0 h-[200px] w-[100px]">
                    <div className="new-location-wrapper relative bg-[#F4F4F4] ">

                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
