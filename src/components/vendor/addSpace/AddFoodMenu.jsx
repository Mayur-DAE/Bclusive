import { Upload } from 'lucide-react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const AddFoodMenu = () => {
    const [images, setImages] = useState([]);

    console.log(images)

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

    return (
        <div className="bg-white p-4 rounded-xl">
            <p className="text-md font-semibold mb-2">Name of the menu <span className="text-red-600 text-lg">*</span></p>
            <input type="text" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full mb-2" />
            <p className="text-md font-semibold mb-2">Menu details<span className="text-red-600 text-lg">*</span></p>

            <div className="h-64 lg:h-72 mb-8 lg:mb-0">
                <ReactQuill theme="snow" className="h-full max-h-52" />
            </div>

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

            <div className='grid grid-cols-7 gap-4'>
                <div className='col-span-7   lg:col-span-1'>
                    <p className="text-md font-semibold mb-2">Price <span className="text-red-600 text-lg">*</span></p>
                    <input type="text" placeholder="$100" className="h-10 p-1 outline outline-zinc-200 rounded-md w-full" />
                </div>
                {/* Category */}
                <div className='col-span-7   lg:col-span-2'>
                    <p className="text-md font-semibold mb-2">Category</p>
                    <select
                        id="Category"
                        name="Category"
                        className="form-select mt-1 block w-full border-2 border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-10 outline-2 outline-zinc-300 p-1"
                    >
                        <option value="" disabled selected className="bg-gray-100">
                            Select Category
                        </option>
                        <option value="1003">Select Category</option>
                        <option value="1002">Lunch</option>
                        <option value="5">Coffee Break</option>
                        <option value="4">Reception</option>
                        <option value="3">Dinner</option>
                    </select>
                </div>
                {/* From */}
                <div className='col-span-7   lg:col-span-2'>
                    <p className="text-md font-semibold mb-2">From</p>
                    <select
                        id="From"
                        name="From"
                        className="form-select mt-1 block w-full border-2 border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-10 outline-2 outline-zinc-300 p-1"
                    >
                        <option value="" disabled selected className="bg-gray-100">
                            Available From
                        </option>
                        <option value="1003">Select Category</option>
                        <option value="1002">00:00 AM</option>
                        <option value="1002">00:30 AM</option>
                        <option value="1002">01:00 AM</option>
                        <option value="1002">01:30 AM</option>
                    </select>
                </div>

                {/* To */}
                <div className='col-span-7   lg:col-span-2'>
                    <p className="text-md font-semibold mb-2">From</p>
                    <select
                        id="To"
                        name="To"
                        className="form-select mt-1 block w-full border-2 border-zinc-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-10 outline-2 outline-zinc-300 p-1"
                    >
                        <option value="" disabled selected className="bg-gray-100">
                            Available To
                        </option>
                        <option value="1003">Select Category</option>
                        <option value="1002">00:00 AM</option>
                        <option value="1002">00:30 AM</option>
                        <option value="1002">01:00 AM</option>
                        <option value="1002">01:30 AM</option>
                    </select>
                </div>

            </div>
        </div>
    )
}
