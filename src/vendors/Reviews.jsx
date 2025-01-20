import './homepage.css';
import { VendorHeader } from "../components/vendor/VendorHeader";
import { VendorReview } from '../components/vendor/vendorReview';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Modal from '../components/Modal';

export const Reviews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [customNote, setCustomNote] = useState('');
    const [reviewRequests, setReviewRequests] = useState([]);

    const customers = [
        { id: 1, name: 'Customer A' },
        { id: 2, name: 'Customer B' },
        // ... more customers
    ];

    const handleRequestReview = () => {
        const newRequest = { customer: selectedCustomer, status: 'Pending', note: customNote };
        setReviewRequests([...reviewRequests, newRequest]);
        setSelectedCustomer('');
        setCustomNote('');
        setIsModalOpen(false);
    };

    return (
        <div className='bg-gray-200'>
            <VendorHeader />
            <div className='container mx-auto py-12'>
                <div className='py-2 px-4 flex w-full justify-end bg-white rounded-2xl mb-4'>
                    <button
                        className='bg-primary-dark text-white text-base font-bold flex items-center gap-2 py-2 px-4 rounded-md hover:bg-primary-dark/80'
                        onClick={() => setIsModalOpen(true)}
                    >
                        Request Review <ChevronRight />
                    </button>
                </div>
                <VendorReview />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className='p-4'>
                    <h2 className='text-lg font-bold mb-4'>Request Review</h2>
                    <select
                        className=' w-full border rounded-md h-10  border-gray-400 mb-4'
                        value={selectedCustomer}
                        onChange={(e) => setSelectedCustomer(e.target.value)}
                    >
                        <option value=''>Select Customer</option>
                        {customers.map(customer => (
                            <option key={customer.id} value={customer.name}>{customer.name}</option>
                        ))}
                    </select>
                    <textarea
                        className='mb-2 w-full rounded-md p-4  border-gray-400 border'
                        placeholder='Add custom note...'
                        value={customNote}
                        onChange={(e) => setCustomNote(e.target.value)}
                    />
                    <button
                        className='bg-primary-dark text-white text-base font-bold py-2 px-4 rounded-md hover:bg-primary-dark/80'
                        onClick={handleRequestReview}
                    >
                        Submit Request
                    </button>
                </div>
            </Modal>
        </div>
    );
};

