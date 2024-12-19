import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrandingMenuCard } from "./TrandingMenuCard";

const PopularMenus = () => {
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
                setMenus(sortedMenus.slice(0, 3));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching menus:", error);
            }
        };

        fetchMenus();
    }, []);

    if (loading) {
        return <div className="xl:w-[34%] text-white overflow-hidden rounded-2xl gap-3 p-5 flex-col flex bg-gradient-to-bl from-bloods-950 via-red-800 to-bloods-950 shadow-multiple">
            <h1 className="text-lg font-medium">Tranding Menu</h1>
            <div className="flex flex-col">
            </div>
        </div>;
    }

    return (
        <div className="xl:w-[34%] h-80 text-white overflow-hidden rounded-2xl gap-3 p-5 flex-col flex bg-gradient-to-bl from-bloods-950 via-red-800 to-bloods-950 shadow-multiple">
            <h1 className="text-lg font-medium">Tranding Menu</h1>
            {menus.map((menu) => (
                <div className="flex flex-col">
                    <TrandingMenuCard key={menu._id} menu={menu} />
                </div>
            ))}
        </div>
    );
};

export default PopularMenus;
