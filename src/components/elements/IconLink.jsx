/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function IconLink({linkTo, name, children, isActive}) {
    return (
        <Link to={linkTo} className={`flex items-center gap-2 ${isActive ? "bg-white text-bloods-900 translate-x-4" : ""} hover:bg-bloods-50 hover:text-bloods-900 hover:translate-x-4 active:bg-bloods-100 font-semibold py-5 pl-4 rounded-l-md transition-all duration-100`}>
            <div className="text-2xl">
                {children}
            </div>
            <h1>{name}</h1>
        </Link>
    )
}