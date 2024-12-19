import { PiHandHeartFill } from "react-icons/pi";
import Blob from '../../elements/Blob.svg';
import axios from "axios"; // Pastikan ini diimpor
import { useEffect, useState } from "react";

export function Insight() {
    const [favMenu, setFavMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavMenu = async () => {
            try {
                const response = await axios.get(
                    "https://kenangan-kita-api.vercel.app/menus"
                );
                const sortedMenus = response.data.data.sort(
                    (a, b) => b.totalRating - a.totalRating
                );
                setFavMenu(sortedMenus.slice(0, 1)); // Memperbaiki setFavMenu
                setLoading(false);
            } catch (error) {
                console.error("Error fetching menus:", error);
            }
        };

        fetchFavMenu();
    }, []);

    if (loading) {
        return <div className="w-full xl:w-[66%] relative overflow-hidden rounded-2xl justify-between p-5 flex-col flex h-80 bg-white shadow-multiple">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <PiHandHeartFill className="text-bloods-700 text-4xl" />
                    <h1 className="text-2xl font-medium">Favorite Menu</h1>
                </div>
                <div>
                    <p className="text-sm text-black opacity-35 hover:opacity-100">
                        Displays the most ordered products to track sales trends and support business decisions.
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className="w-[30%] h-[50%] flex justify-center flex-col items-center">
                    <h1 className="text-5xl font-medium">0</h1>
                    <p className="text-xs text-center opacity-35">
                        This menu has significantly increased in popularity!
                    </p>
                </div>
                <div className="w-[60%] justify-center flex z-20">
                </div>
            </div>
            <img src={Blob} alt="" className="absolute bottom-0 translate-y-40 w-96 translate-x-32 left-72" />
        </div>;
    }

    return (
        <div className="w-full xl:w-[66%] relative overflow-hidden rounded-2xl justify-between p-5 flex-col flex h-80 bg-white shadow-multiple">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <PiHandHeartFill className="text-bloods-700 text-4xl" />
                    <h1 className="text-2xl font-medium">Favorite Menu</h1>
                </div>
                <div>
                    <p className="text-sm text-black opacity-35 hover:opacity-100">
                        Displays the most ordered products to track sales trends and support business decisions.
                    </p>
                </div>
            </div>

            {favMenu.map((menu) => (
                <div className="flex justify-between items-end" key={menu._id}>
                    <div className="w-[30%] h-[70%] flex justify-center flex-col items-center">
                        <h1 className="text-5xl font-medium">{menu.totalRating}</h1>
                        <p className="text-xs text-center opacity-35">
                            This menu has significantly increased in popularity!
                        </p>
                    </div>
                    <div className="w-[60%] justify-center flex z-20">
                        <img src={menu.image} alt={menu.name} className="w-[80%]" />
                    </div>
                </div>
            ))}

            <img src={Blob} alt="" className="absolute bottom-0 translate-y-40 w-96 translate-x-32 left-72" />
        </div>
    );
}
