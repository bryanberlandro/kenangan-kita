import React, { useState } from "react";

const ReviewModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        rasa: "",
        harga: "",
        kualitas: "",
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        onClose(); 
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-11/12 max-w-lg shadow-lg">
                <div className="sticky top-0 bg-white p-4 border-b border-gray-300 z-10">
                    <h2 className="text-xl font-semibold">Review</h2>
                    <p className="opacity-70 font-medium">Meja T-204</p>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    >
                        ✖
                    </button>
                </div>

                <div className="p-4">
                    <div className="mb-4">
                        {/* nanti lu taro dikurawal aja ya mo apinya biar ga ribet */}
                        {/* nanti lu taro dikurawal aja ya mo apinya biar ga ribet */}
                        {/* nanti lu taro dikurawal aja ya mo apinya biar ga ribet */}
                        <h3 className="text-lg font-semibold">Menu: {"Kopi Sepongsbobe squerpants"}</h3>
                        <h3 className="text-lg font-medium text-gray-600">Category: {"Coffee"}</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-medium text-gray-700">
                                Rasa
                            </label>
                            <input
                                type="number"
                                name="rasa"
                                min="1"
                                max="5"
                                value={formData.rasa}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="Nilai antara 1-5"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">
                                Harga
                            </label>
                            <input
                                type="number"
                                name="harga"
                                min="1"
                                max="5"
                                value={formData.harga}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="Nilai antara 1-5"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">
                                Kualitas
                            </label>
                            <input
                                type="number"
                                name="kualitas"
                                min="1"
                                max="5"
                                value={formData.kualitas}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="Nilai antara 1-5"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">
                                Comment
                            </label>
                            <textarea
                                name="comment"
                                rows="4"
                                value={formData.comment}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="Tambahkan komentar Anda"
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
