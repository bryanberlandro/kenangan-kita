/* eslint-disable react/prop-types */
import { BiSolidDashboard } from "react-icons/bi";
import { MdRestaurantMenu, MdTableBar } from "react-icons/md";
import { IconLink } from "../elements/IconLink";
import { useLocation } from "react-router-dom";

export function Sidebar({isSidebarActive}) {
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1];

    return (
        <div className={`fixed xl:left-0 xl:top-0 z-[1000] bg-gradient-to-t from-bloods-950 via-bloods-950 to-bloods-700 h-dvh xl:flex flex-col justify-between py-6 w-56 xl:w-60 transition-all duration-500 xl:translate-x-0 ${isSidebarActive ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="xl:*:pl-2">
                <div className=" py-4 text-white flex flex-col gap-1 overflow-hidden">
                    <IconLink
                        linkTo="/dashboard"
                        name="Dashboard"
                        isActive={currentPath === "dashboard"}
                    >
                        <BiSolidDashboard />
                    </IconLink>
                    <IconLink
                        linkTo="/order"
                        name="Order"
                        isActive={currentPath === "order"}
                    >
                        <MdTableBar />
                    </IconLink>
                    <IconLink
                        linkTo="/menu"
                        name="Menu"
                        isActive={currentPath === "menu"}
                    >
                        <MdRestaurantMenu />
                    </IconLink>
                </div>
            </div>

        </div>
    )
}