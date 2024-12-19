import React, { useState } from "react";

const ReviewModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        taste: 0,
        price: 0,
        presentation: 0,
        comment: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false); // Untuk status loading

    const handleRatingChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

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
                taste: 0,
                price: 0,
                presentation: 0,
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

    const renderStars = (field, value) => {
        return (
            <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(field, star)}
                        className={`text-2xl ${
                            star <= value ? "text-yellow-500" : "text-gray-400"
                        }`}
                    >
                        ★
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="sticky w-full h-dvh inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
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
                        <h3 className="text-lg font-semibold">Menu: {"Kopi Sepongsbobe squerpants"}</h3>
                        <h3 className="text-lg font-medium text-gray-600">Category: {"Coffee"}</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block font-medium text-gray-700">Taste</label>
                            {renderStars("taste", formData.taste)}
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Price</label>
                            {renderStars("price", formData.price)}
                        </div>

                        <div>
                            <label className="block font-medium text-gray-700">Presentation</label>
                            {renderStars("presentation", formData.presentation)}
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
