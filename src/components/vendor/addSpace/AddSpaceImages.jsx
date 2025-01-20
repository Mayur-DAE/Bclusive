import { Trash2, Upload } from 'lucide-react';
import { useState } from 'react';

const AddSpaceImages = () => {
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
        <div className=" bg-gray-100 min-h-screen">
            <h2 className="text-xl font-bold mb-4">Add Space Images</h2>
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
            <div className='flex items-center gap-2 mb-4'>
                <div className='w-full h-px bg-zinc-300'></div>
                <p className='text-zinc-400'>OR</p>
                <div className='w-full h-px bg-zinc-300'></div>
            </div>
            <div className="relative w-full mb-6 border-2 border-dashed rounded-lg">
                <input
                    type="text"
                    placeholder="Add URL link"
                    className="rounded-lg p-2 w-full pr-20 outline-none"
                />
                <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
                >
                    Select
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
    );
};

export default AddSpaceImages;
