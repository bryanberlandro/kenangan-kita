export function RecentReviewCard({ userName, comment, rating, reviewDate }) {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-lg">{userName}</h2>
                <span className="text-sm text-gray-500">{reviewDate}</span>
            </div>
            <p className="text-gray-700">{comment}</p>
            <div className="flex gap-2 text-sm">
                <span>Taste: {rating.taste}</span>
                <span>Price: {rating.price}</span>
                <span>Presentation: {rating.presentation}</span>
            </div>
        </div>
    );
}
