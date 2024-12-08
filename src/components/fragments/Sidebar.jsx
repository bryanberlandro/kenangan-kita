import { BiLogOutCircle, BiSolidDashboard, BiSolidReceipt } from "react-icons/bi";
import { MdRestaurantMenu, MdTableBar } from "react-icons/md";
import { IconLink } from "../elements/IconLink";
import { useLocation } from "react-router-dom";

export function Sidebar(){
    const location = useLocation();
    const currentPath = location.pathname.split('/')[1];

    return(
        <div className="fixed left-0 top-0 z-[1000] bg-gradient-to-br from-bloods-900 via-bloods-900 to-bloods-700 h-dvh flex flex-col justify-between py-6 w-60">
            <div className="pl-2">
                <div className="rounded-full bg-white w-10 h-10 ml-4"></div>
                <div className="mt-8 py-4 text-white flex flex-col gap-1 overflow-hidden">
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
                        linkTo="/order-history" 
                        name="Order History"
                        isActive={currentPath === "order-history"} 
                    >
                        <BiSolidReceipt />
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
            <div className="flex items-center gap-2 font-semibold text-white pl-4">
                <BiLogOutCircle className="text-2xl" />
                <h1>Log Out</h1>
            </div>
        </div>
    )
}