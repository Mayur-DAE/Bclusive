import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const SalesChart = () => {
    const data = {
        labels: [
            "Jan 2023",
            "Feb 2023",
            "Mar 2023",
            "Apr 2023",
            "May 2023",
            "Jun 2023",
            "Jul 2023",
            "Aug 2023",
            "Sep 2023",
            "Oct 2023",
            "Nov 2023",
            "Dec 2023",
        ],
        datasets: [
            {
                label: "Sales",
                data: [30000, 32000, 34000, 36000, 37000, 36128, 38000, 40000, 42000, 44000, 46000, 47000],
                borderColor: "#3b82f6",
                fill: true,
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                tension: 0.5,
                pointBackgroundColor: "#3b82f6",
                pointRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => ` $${context.raw.toLocaleString()}`,
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    callback: (value) => `${value / 1000}k`,
                },
            },
        },
    };

    return (
        <div className="px-4 lg:px-0">
            <div className="p-4 bg-white shadow-md rounded-2xl mt-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Total Sales</h2>
                    <button className="text-gray-500">
                        <span className="sr-only">Info</span>
                    </button>
                </div>
                <div className="flex gap-4 items-center mb-4 overflow-x-auto">
                    <button className="px-4 py-1 bg-blue-500 text-white rounded-lg">12 months</button>
                    <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-lg">30 days</button>
                    <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-lg">7 days</button>
                    <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded-lg">24 hours</button>
                    <button className="px-4 py-1 border border-gray-300 rounded-lg text-gray-700">
                        Select dates
                    </button>
                </div>
                <div>
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default SalesChart;
