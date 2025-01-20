import './homepage.css';
import { VendorHeader } from "../components/vendor/VendorHeader";
import { Trash2, Upload } from 'lucide-react';
import { useState } from 'react';

export const Settings = () => {

    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => ({
            id: Date.now() + Math.random(),
            file,
            title: '',
            preview: URL.createObjectURL(file),
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleImageDelete = (id) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    const handleTitleChange = (id, newTitle) => {
        setImages((prevImages) =>
            prevImages.map((image) =>
                image.id === id ? { ...image, title: newTitle } : image
            )
        );
    };

    return (
        <div className='bg-gray-200'>
            <VendorHeader />
            <div className='container mx-auto py-10'>
                <div className='bg-white border border-zinc-300 px-4 py-2 rounded-xl'>
                    <p className="text-lg font-semibold mb-6">Settings</p>

                    <div className="flex flex-col space-y-2 col-span-4 lg:col-span-2 mb-4">
                        <p className="text-xs text-zinc-500 font-semibold">Name of the vendor</p>
                        <input type="text" placeholder='Hotel Inn' className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                    </div>

                    {/* Address Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        <div className="flex flex-col space-y-2">
                            <p className="text-xs text-zinc-500 font-semibold">Street</p>
                            <input type="text" placeholder="4899 3rd Avenue" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-xs text-zinc-500 font-semibold">City</p>
                            <input type="text" placeholder="Lethbridge" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-xs text-zinc-500 font-semibold">State/Province/Area</p>
                            <input type="text" placeholder="Alberta" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-xs text-zinc-500 font-semibold">Phone Number</p>
                            <input type="text" placeholder="+1403-634-8796" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-xs text-zinc-500 font-semibold">Zip Code</p>
                            <input type="text" placeholder="T1J 0J9" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <p className="text-xs text-zinc-500 font-semibold">Country</p>
                            <input type="text" placeholder="Canada" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                        </div>
                    </div>

                    {/* Vendor Photo */}

                    <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg bg-white mb-4">
                        <input
                            type="file"
                            multiple
                            accept=".png,.jpeg,.webp,.avif"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            className=" text-center text-gray-500 cursor-pointer flex flex-col items-center"
                        >
                            <div className="p-2">
                                <Upload />
                            </div>
                            <p className="text-gray-500 mt-4">Drag & Drop or choose files to upload</p>
                            <p className="text-gray-400">Select png, jpeg, webp, or avif</p>
                        </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
                        {images.map((image) => (
                            <div key={image.id} className="bg-white p-4 rounded-lg shadow">
                                <img
                                    src={image.preview}
                                    alt="Uploaded"
                                    className="w-full h-40 object-cover rounded mb-2"
                                />
                                <div className='flex items-center gap-2'>

                                    <input
                                        type="text"
                                        placeholder="Title:"
                                        value={image.title}
                                        onChange={(e) => handleTitleChange(image.id, e.target.value)}
                                        className="w-full border-b border-gray-300 outline-none text-xs px-2 py-1"
                                    />
                                    <button
                                        onClick={() => handleImageDelete(image.id)}
                                        className=" text-red-500 rounded hover:text-red-600"
                                    >
                                        <Trash2 />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stripe Details */}
                    <div className="flex flex-col space-y-2 col-span-4 lg:col-span-2 mb-4">
                        <p className="text-xs text-zinc-500 font-semibold">Stripe Payment Publishable Key</p>
                        <input type="text" placeholder="pk_test_51IEaMJF0q6Z3V7z0JgkzKkyAC2P2VAXvZqIzF5C04X..." className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

