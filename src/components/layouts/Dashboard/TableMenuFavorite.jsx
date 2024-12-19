import axios from "axios";
import { useEffect, useState } from "react";

export function TableMenuFavorite() {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await axios.get(
                    "https://kenangan-kita-api.vercel.app/menus"
                );
                const sortedMenus = response.data.data.sort(
                    (a, b) => b.totalRating - a.totalRating
                );
                setMenus(sortedMenus);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching menus:", error);
            }
        };

        fetchMenus();
    }, []);

    if (loading) {
        return <p>Loading bro sabar...</p>
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Favorite Coffee Menu</h1>
            <table className="min-w-full border border-bloods-300 rounded-md overflow-hidden">
                <thead className="bg-bloods-100">
                    <tr>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Rank</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Menu</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Taste</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Price</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Presentation</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((menu, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-bloods-50"
                                } hover:bg-bloods-100 transition-colors`}
                        >
                            <td className="border border-bloods-300 px-4 py-2 text-center">{index + 1}</td>
                            <td className="border border-bloods-300 px-4 py-2 ">{menu.name}</td>
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.tasteRating}</td>
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.priceRating}</td>
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.presentationRating}</td>
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.totalRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
