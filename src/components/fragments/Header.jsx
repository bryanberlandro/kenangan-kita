/* eslint-disable react/prop-types */
import { RiMenu2Fill } from "react-icons/ri";

export function Header({ onClick }) {
    return (
        <div className="w-full h-16 z-50 bg-gradient-to-r from-bloods-600 to-bloods-950 flex items-center p-5 justify-between xl:hidden">
            <RiMenu2Fill className="text-white text-2xl" onClick={onClick}/>

            <div>
                <p className="text-white font-medium">Kenangan Kita</p>
            </div>
        </div>
    )
}