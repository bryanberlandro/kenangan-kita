import { FaStar } from "react-icons/fa";

export function RecentReviewCard() {
    return (
        <div className="border p-3 rounded-xl flex items-center justify-between">
            <div className="flex flex-col">
                <h1 className="font-medium">Americano</h1>
                <p className="text-sm opacity-70">John Kendor</p>
            </div>

            <div className="flex text-bloods-500">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
        </div>
    )
}