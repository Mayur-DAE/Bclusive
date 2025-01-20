import './homepage.css';
import { VendorHeader } from "../components/vendor/VendorHeader";
import VendorStats from '../components/vendor/vendorStats';
import { VendorReview } from '../components/vendor/vendorReview';
import SalesChart from '../components/vendor/SalesChart';

export const VendorHomePage = () => {

    return (
        <div className='bg-gray-200'>

            <VendorHeader />
            <div className='container mx-auto py-12'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 lg:px-0 mb-8'>
                    <VendorStats
                        title="Leads Received"
                        count={25}
                        period="In the last 12 months"
                        hasReviewDetails={false}
                    />
                    <VendorStats
                        title="Reviews"
                        count={10}
                        period="In the last 12 months"
                        hasReviewDetails={true}
                    />
                    <VendorStats
                        title="Storefront Impressions"
                        count={2493}
                        period="In the last 12 months"
                        hasReviewDetails={false}
                    />
                </div>

                <VendorReview />

                <SalesChart />
            </div>
        </div>
    );
};

