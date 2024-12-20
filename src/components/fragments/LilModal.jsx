/* eslint-disable react/prop-types */
const LilModal = ({ customerName, orderId, onConfirmPayment }) => {
    return (
        <div className="absolute w-max h-max bg-white rounded-lg shadow-md -right-20 -top-full pl-2 pr-4 py-3">
            <h1 className="font-medium">{customerName}</h1>
            <h1 className="font-semibold text-neutral-400">{`#${orderId}`}</h1>
            <button 
                onClick={onConfirmPayment} 
                className="w-full text-center px-4 py-1 bg-green-400 mt-4 font-medium btn-hover text-sm rounded-lg"
            >
                Confirm Payment
            </button>
        </div>
    );
};

export default LilModal;
