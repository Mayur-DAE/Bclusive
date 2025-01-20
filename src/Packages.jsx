
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ListingSpaceCard from "./components/listing/ListingSpaces";

export const Packages = () => {
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
                <h1 className="text-3xl font-bold font-plus mb-2 text-primary-dark">Fairmont Vancouver</h1>
                <p className="text-md font-plus mb-2 text-gray-500">Hotel Standard Room with 1 King Bed. 325 square feet. Skybridge to Casino Tower. Coffee Machine, Tea Kettle, Flat Screen LCD television, Working Desk, Ergonomic chair and Wifi</p>
                <p className="text-lg font-plus font-bold mb-2 text-primary-dark mb-6">18 Spaces</p>
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