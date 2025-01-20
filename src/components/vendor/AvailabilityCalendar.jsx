import { useState } from "react";
import {
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    format,
} from "date-fns";

const AvailabilityCalendar = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    // Sample data for availability
    const [availabilityData, setAvailabilityData] = useState([
        { date: "2024-01-10", status: "unavailable" },
        { date: "2024-01-15", status: "unavailable" },
        { date: "2024-02-03", status: "unavailable" },
    ]);

    // Years to display in the selector
    const years = [2024, 2025, 2026];

    // Function to generate days for a given month
    const generateDays = (month) => {
        const start = startOfMonth(month);
        const end = endOfMonth(month);
        return eachDayOfInterval({ start, end });
    };

    // Array of months for the selected year
    const months = Array.from({ length: 12 }, (_, i) => new Date(selectedYear, i));

    // Toggle availability on date click
    const toggleAvailability = (date) => {
        const formattedDate = format(date, "yyyy-MM-dd");

        setAvailabilityData((prev) => {
            const existing = prev.find((item) => item.date === formattedDate);

            if (existing) {
                // Remove the date if already in the availability data
                return prev.filter((item) => item.date !== formattedDate);
            } else {
                return [...prev, { date: formattedDate, status: "selected" }];
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 lg:p-6">

            <div className="flex w-full flex-col md:flex-row items-center justify-between">
                {/* Legend */}
                <div className=" mb-4">
                    <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-green-100 border border-green-600 rounded-full"></div>
                            <span className="text-sm">Available</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-red-100 border border-red-600 rounded-full"></div>
                            <span className="text-sm">Unavailable</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Click on date to select availability.</p>
                </div>

                {/* Year Selector */}
                <div className="flex space-x-4 mb-6">
                    {years.map((year) => (
                        <button
                            key={year}
                            className={`px-4 py-2 rounded ${year === selectedYear
                                ? "bg-gray-800 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                                }`}
                            onClick={() => setSelectedYear(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>


            </div>

            {/* Month Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                {months.map((month) => (
                    <div key={month} className="bg-white shadow-md rounded p-4">
                        <h2 className="text-xs font-semibold text-center mb-2">
                            {format(month, "MMMM yyyy")}
                        </h2>
                        {/* Days of the Week Header */}
                        <div className="grid grid-cols-7 text-xs text-center font-medium mb-2">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                <div key={day}>{day}</div>
                            ))}
                        </div>

                        {/* Day Cells */}
                        <div className="grid grid-cols-7">
                            {generateDays(month).map((day) => {
                                const formattedDate = format(day, "yyyy-MM-dd");
                                const isUnavailable = availabilityData.some(
                                    (item) => item.date === formattedDate
                                );
                                const isSelected = availabilityData.some(
                                    (item) => item.date === formattedDate && item.status === "selected"
                                );

                                return (
                                    <div
                                        key={day.toISOString()}
                                        className={`p-1 h-8 w-8 md:h-6 md:w-6 flex items-center justify-center text-xs rounded-full m-1 ${isUnavailable
                                            ? isSelected ? "bg-yellow-300" : "bg-red-100 text-red-600 cursor-not-allowed"
                                            : "bg-green-100 text-green-600 cursor-pointer"
                                            }`}
                                        onClick={() => toggleAvailability(day)}
                                    >
                                        {format(day, "d")}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailabilityCalendar;
