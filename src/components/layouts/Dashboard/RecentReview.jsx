import { useEffect, useRef } from "react";
import { RecentReviewCard } from "../../elements/RecentReviewCard";

export function RecentReview() {
    const scrollRef = useRef(null);

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
        <div className="h-[49%] overflow-hidden gap-2 rounded-2xl justify-between p-5 flex-col flex bg-white shadow-multiple">
            <h1 className="text-lg font-medium">Recent Review</h1>

            <div
                className="flex flex-col gap-1 overflow-y-scroll custom-scrollbar"
                ref={scrollRef}
                style={{ maxHeight: "calc(100% - 2rem)" }}
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <RecentReviewCard key={index} />
                ))}
            </div>
        </div>
    );
}
