import { useState } from "react";

function PinModal({ isOpen, onClose, onSubmit }) {
    const [pin, setPin] = useState("");

    if (!isOpen) return null;

    const handleSubmit = () => {
        if (pin.length === 4) {
            onSubmit(pin);
            onClose();
        } else {
            alert("PIN harus terdiri dari 4 digit.");
        }
    };

    return (
        <div className="sticky w-full h-dvh inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold text-center mb-4">Masukkan PIN</h2>
                <input
                    type="password"
                    maxLength="4"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md text-center text-lg tracking-widest"
                    placeholder="••••"
                />
                <div className="flex justify-between mt-6">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Konfirmasi
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PinModal;
