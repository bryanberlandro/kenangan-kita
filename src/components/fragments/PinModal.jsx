/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

function PinModal({ isOpen, onClose, onSubmit }) {
    const [pin, setPin] = useState("");

    if (!isOpen) return null;

    const handleSubmit = () => {
        if(pin.length !== 4){
            return alert("PIN must be 4 characters long")
        }
        if (pin === "2222") {
            alert("Pin benar");
            const role = {
                role: "admin"
            }
            localStorage.setItem("role", JSON.stringify(role));
        } else {
            alert("Incorrect PIN");
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
                <div className="flex gap-2 mt-6">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md btn-hover w-1/2"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md btn-hover w-1/2"
                    >
                        Konfirmasi
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PinModal;
