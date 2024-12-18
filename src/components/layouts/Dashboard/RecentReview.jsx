import { useEffect, useRef, useState } from "react";
import { RecentReviewCard } from "../../elements/RecentReviewCard";

export function RecentReview() {
    const scrollRef = useRef(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch("https://kenangan-kita-api.vercel.app/reviews");
                const result = await response.json();

                if (response.ok && result.status === 200) {
                    setReviews(result.data);
                } else {
                    console.error("Failed to fetch reviews:", result.message);
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }

        fetchReviews();
    }, []);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (!scrollContainer) return;

        let scrollStep = 1;
        let scrollPosition = 0;

        const scrollInterval = setInterval(() => {
            scrollPosition += scrollStep;
            scrollContainer.scrollTop = scrollPosition;

            if (scrollPosition >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
                scrollPosition = 0;
            }
        }, 35);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="xl:w-1/3 w-full overflow-hidden gap-2 rounded-2xl justify-between p-5 flex-col flex bg-white shadow-multiple">
            <h1 className="text-lg font-medium">Recent Review</h1>

            <div
                className="flex flex-col gap-1 overflow-y-scroll custom-scrollbar"
                ref={scrollRef}
                style={{ maxHeight: "calc(100% - 2rem)" }}
            >
                {reviews.map((review) => (
                    <RecentReviewCard
                        key={review._id}
                        userName={review.userName}
                        comment={review.comment}
                        rating={review.rating}
                        reviewDate={new Date(review.reviewDate).toLocaleDateString()}
                    />
                ))}
            </div>
        </div>
    );
}
