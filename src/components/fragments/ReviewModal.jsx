import React, { useState } from "react";

const ReviewModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        taste: "",
        price: "",
        presentation: "",
        comment: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // Untuk status loading

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://kenangan-kita-api.vercel.app/create-review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit review");
            }

            const data = await response.json();
            console.log("Success:", data);

            // Reset form and close modal
            setFormData({
                taste: "",
                price: "",
                presentation: "",
                comment: "",
            });
            onClose();
        } catch (error) {
            console.error("Error:", error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-11/12 max-w-lg shadow-lg">
                {/* Header Modal */}
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
                        <h3 className="text-lg font-semibold">Menu: {"Kopi Sepongsbobe squerpants"}</h3>
                        <h3 className="text-lg font-medium text-gray-600">Category: {"Coffee"}</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-medium text-gray-700">Taste</label>
                            <input
                                type="number"
                                name="taste"
                                min="1"
                                max="5"
                                value={formData.taste}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="Nilai antara 1-5"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Price</label>
                            <input
                                type="number"
                                name="price"
                                min="1"
                                max="5"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="Nilai antara 1-5"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Presentation</label>
                            <input
                                type="number"
                                name="presentation"
                                min="1"
                                max="5"
                                value={formData.presentation}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border rounded-lg"
                                placeholder="Nilai antara 1-5"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Comment</label>
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
                                disabled={isSubmitting}
                                className={`px-4 py-2 rounded ${
                                    isSubmitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
