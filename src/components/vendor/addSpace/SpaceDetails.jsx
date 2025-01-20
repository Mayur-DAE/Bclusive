import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const SpaceDetails = () => {
    return (
        <>
            <div className=" bg-white p-2 lg:rounded-lg border border-zinc-200 mb-4">

                <div className="border border-zinc-200 rounded py-2 px-4 flex items-center mb-2">
                    <p className="text-xs font-bold">Describe your space and services *</p>
                </div>

                <div className="h-64 lg:h-72 mb-2">
                    <ReactQuill theme="snow" className="h-full max-h-52" />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3">
                {/* Space Type */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <h4 className="font-mulish font-bold mb-2">Space Type</h4>
                    <select
                        id="SpaceType"
                        name="SpaceType"
                        className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8 p-1"
                    >
                        <option value="" disabled selected className="bg-gray-100">
                            Select Type
                        </option>
                        <option value="5-Event Space">Event Space</option>
                        <option value="4-Conference Room">Conference Room</option>
                        <option value="3-Training Room">Training Room</option>
                        <option value="2-Meeting Room">Meeting Room</option>
                    </select>
                    <div className="text-red-600 text-sm mt-1">
                        Space type is required.
                    </div>
                </div>

                {/* Seating Capacity */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <h4 className="font-mulish font-bold mb-2">Seating Capacity</h4>
                    <input
                        id="SeatingCapacity"
                        type="text"
                        name="SeatingCapacity"
                        placeholder="e.g. 200"
                        className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8 p-1"
                    />
                </div>

                {/* Seat Type */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <h4 className="font-mulish font-bold mb-2">Seat Type</h4>
                    <select
                        id="SeatType"
                        name="SeatType"
                        className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8 p-1"
                    >
                        <option value="" disabled selected className="bg-gray-100">
                            Select Type
                        </option>
                        <option value="1003">Meeting</option>
                        <option value="1002">Event</option>
                        <option value="5">Conference</option>
                        <option value="4">Theater</option>
                        <option value="3">Auditorium</option>
                        <option value="2">Rectangle Table</option>
                        <option value="1">Round Table</option>
                    </select>
                </div>

                {/* Amount */}
                <div className="w-full md:w-1/2 px-3 mb-4">
                    <h4 className="font-mulish font-bold mb-2">Amount</h4>
                    <input
                        id="Amount"
                        type="text"
                        name="Amount"
                        placeholder="e.g. $150"
                        className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8 p-1"
                    />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-4">
                    <h4 className="font-mulish font-bold mb-2">Discount <span className='text-xs font-normal text-zinc-500'>(Only add if you want to give discount)</span></h4>
                    <input
                        id="Discount"
                        type="text"
                        name="Discount"
                        placeholder="e.g. 10%"
                        className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-8 p-1"
                    />
                </div>
            </div>



        </>
    )
}
