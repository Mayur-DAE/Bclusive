/* eslint-disable react/prop-types */

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <button
                    className="absolute -top-2 right-2 hover:text-black/80 text-black text-4xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;