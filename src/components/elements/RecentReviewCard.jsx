import { FaStar } from "react-icons/fa";

export function RecentReviewCard() {
    const reviews = [
        { product: "Cappuccino", reviewer: "Sarah Williams", stars: 5 },
        { product: "Latte", reviewer: "James Smith", stars: 4 },
        { product: "Espresso", reviewer: "Michael Johnson", stars: 3 },
        { product: "Macchiato", reviewer: "Emily Davis", stars: 5 },
        { product: "Mocha", reviewer: "Chris Brown", stars: 4 },
        { product: "Flat White", reviewer: "Jessica Taylor", stars: 5 },
        { product: "Affogato", reviewer: "David Martinez", stars: 3 },
        { product: "Ristretto", reviewer: "Sophia Hernandez", stars: 4 },
        { product: "Americano", reviewer: "John Kendor", stars: 5 },
        { product: "Iced Coffee", reviewer: "Emma Thompson", stars: 4 }
    ];

    return (
        <div>
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="border p-3 rounded-xl flex items-center justify-between mb-3"
                >
                    <div className="flex flex-col">
                        <h1 className="font-medium">{review.product}</h1>
                        <p className="text-sm opacity-70">{review.reviewer}</p>
                    </div>

                    <div className="flex text-bloods-500">
                        {Array(review.stars)
                            .fill()
                            .map((_, i) => (
                                <FaStar key={i} />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
