export const LocationMap = () => {
    return (
        <>
            <p className="text-xl font-semibold mb-2">Location details</p>
            <div className=" bg-white p-4 lg:rounded-lg border border-zinc-200 mb-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col space-y-2 col-span-4 lg:col-span-1">
                        <p className="text-md font-semibold">Country <span className="text-red-600 text-lg">*</span></p>
                        <select className="h-10 p-2 outline outline-zinc-200 rounded-md w-full">
                            <option>Select Location</option>
                            <option>Canada</option>
                            <option>USA</option>
                        </select>
                    </div>

                    <div className="flex flex-col space-y-2 col-span-4 lg:col-span-2">
                        <p className="text-md font-semibold">City/Town <span className="text-red-600 text-lg">*</span></p>
                        <input type="text" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                    </div>

                    <div className="flex flex-col space-y-2 col-span-4 lg:col-span-1">
                        <p className="text-md font-semibold">Pin code <span className="text-red-600 text-lg">*</span></p>
                        <input type="text" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                    </div>

                    <div className="flex flex-col space-y-2 col-span-4 lg:col-span-3">
                        <p className="text-md font-semibold">Address <span className="text-red-600 text-lg">*</span></p>
                        <input type="text" className="h-10 p-2 outline outline-zinc-200 rounded-md w-full" />
                    </div>

                    <div className="flex flex-col space-y-2 col-span-4 lg:col-span-1 justify-end">
                        <button
                            className='text-primary-dark hover:text-white hover:bg-primary-dark text-base font-bold flex items-center justify-center gap-2 py-2 px-4 rounded-md border-2 border-primary-dark h-10'
                        >
                            Update Map
                        </button>
                    </div>

                    <div className="relative w-full h-0 col-span-4" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d987.5669162822948!2d-118.38454443175578!3d56.068682702372584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTbCsDA0JzA4LjEiTiAxMTjCsDIzJzAxLjkiVw!5e0!3m2!1sen!2sin!4v1737051165700!5m2!1sen!2sin"
                            width="800"
                            height="450"
                            style={{
                                border: '0',
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                </div>
            </div>
        </>
    )
}
