/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

const ReviewModal = ({ isOpen, setIsOpen, onClose }) => {
    const orderData = JSON.parse(localStorage.getItem('customers')) || [];
    const [formData, setFormData] = useState(
        orderData[0]?.orders.map((order) => ({
            menuId: order._id,
            userName: orderData[0]?.customer,
            taste: 0,
            price: 0,
            presentation: 0,
            comment: "",
        })) || []
    );
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleRatingChange = (index, field, value) => {
        const updatedFormData = [...formData];
        updatedFormData[index][field] = value;
        setFormData(updatedFormData);
    };

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedFormData = [...formData];
        updatedFormData[index][name] = value;
        setFormData(updatedFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
            // Kelompokkan data berdasarkan menuId
            const reviewsByMenu = formData.map((review) => ({
                menuId: review.menuId,
                reviews: [
                    {
                        rating: {
                            taste: review.taste,
                            price: review.price,
                            presentation: review.presentation,
                        },
                        comment: review.comment,
                        userName: review.userName,
                    },
                ],
            }));
    
            // Kirim review ke backend satu per satu
            const promises = reviewsByMenu.map((data) =>
                axios.post(
                    "https://kenangan-kita-api.vercel.app/create-review",
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
            );
    
            await Promise.all(promises);
            localStorage.removeItem('customers');
            console.log("Success: All reviews submitted!");
            onClose();
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        } finally {
            setIsSubmitting(false);
            setIsOpen(false)
        }
    };
    

    const renderStars = (index, field, value) => (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(index, field, star)}
                    className={`text-2xl ${
                        star <= value ? "text-yellow-500" : "text-gray-400"
                    }`}
                >
                    ★
                </button>
            ))}
        </div>
    );

    if (!isOpen) return null;

    return (
        <div className="sticky w-full h-dvh inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-11/12 max-w-lg shadow-lg  overflow-hidden">
                <div className="w-full py-2 bg-white p-4 border-b border-gray-300 overflow-hidden flex justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">Review</h2>
                        <p className="opacity-70 font-medium">{orderData[0]?.id}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        ✖
                    </button>
                </div>

                <div className="p-4 overflow-y-scroll max-h-[400px]">
                    <div className="h-max">
                        {orderData[0]?.orders.map((order, index) => (
                            <div key={order._id} className="mb-6">
                                <h3 className="text-lg font-semibold">{order.name}</h3>
                                <h4 className="text-gray-600">Category: {order.category}</h4>

                                <div className="mt-2">
                                    <label className="block font-medium text-gray-700">Taste</label>
                                    {renderStars(index, "taste", formData[index]?.taste)}
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700">Price</label>
                                    {renderStars(index, "price", formData[index]?.price)}
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700">Presentation</label>
                                    {renderStars(index, "presentation", formData[index]?.presentation)}
                                </div>

                                <div>
                                    <label className="block font-medium text-gray-700">Comment</label>
                                    <textarea
                                        name="comment"
                                        rows="4"
                                        value={formData[index]?.comment}
                                        onChange={(e) => handleChange(index, e)}
                                        className="w-full mt-1 p-2 border rounded-lg"
                                        placeholder="Tambahkan komentar Anda"
                                    ></textarea>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                                className={`px-4 py-2 rounded ${
                                    isSubmitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
