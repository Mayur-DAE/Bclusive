import { useNavigate } from "react-router";

/* eslint-disable react/prop-types */
const ListingSpaceCard = ({ imageUrl, title, availability, rating, reviews, oldPrice, newPrice, discount }) => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full max-w-sm mx-auto bg-white overflow-hidden" onClick={() => navigate('/listing-details')}>
            {/* Image Section */}
            <div className="relative h-56">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-white text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    {availability}
                </div>
                <button className="absolute top-2 right-2 bg-primary-dark p-2 rounded-full shadow-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 8.511c0-3.532-2.761-6.386-6.191-6.386a6.187 6.187 0 0 0-4.383 2.033 6.187 6.187 0 0 0-4.383-2.033c-3.43 0-6.192 2.854-6.192 6.386 0 3.037 1.812 5.717 4.308 7.022L12 21.134l6.442-5.601c2.496-1.305 4.308-3.985 4.308-7.022z"
                        />
                    </svg>
                </button>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                    <h2 className="text-xl font-bold text-gray-900 truncate ">{title}</h2>
                    {/* Rating Section */}
                    <div className="flex items-center  gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-yellow-400"
                        >
                            <path d="M12 .587l3.668 7.429 8.191 1.191-5.927 5.772 1.398 8.154L12 18.896l-7.33 3.847 1.398-8.154-5.927-5.772 8.191-1.191L12 .587z" />
                        </svg>
                        <p className="text-sm font-medium text-gray-700 flex items-center">
                            {rating} <span className="text-gray-500">({reviews})</span>
                        </p>
                    </div>
                </div>
                <p className="text-gray-700 text-sm mt-1">
                    Menginap di tempat Kai dan menikmati pemandangan indah.
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between mt-3">
                    <div>
                        <span className="line-through text-gray-500 text-sm">{oldPrice}</span>
                        <p className="text-xl font-bold text-primary-dark">{newPrice}</p>
                    </div>
                    <div className="bg-secondary/50 border-2 border-secondary text-primary-dark text-xs font-semibold px-2 py-1 rounded-xl">
                        {discount}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingSpaceCard;
