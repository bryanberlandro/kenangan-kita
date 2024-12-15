/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const CategoryBtn = ({children, name}) => {
    const { tableId, categoryId } = useParams()
    const [color, setColor] = useState('')
    
    useEffect(() => {
        if(categoryId == name.toLowerCase()){
            setColor('bg-bloods-700 text-white')
        } else {
            setColor('bg-white text-bloods-700')
        }
    }, [categoryId]) 

    return(
        <Link 
        to={`/order/${tableId}/${name.toLowerCase()}`} 
        className={`px-4 py-2 ${color} shadow-soft cursor-pointer rounded-md flex items-center gap-2 hover:bg-bloods-700 active:bg-bloods-800 font-semibold hover:text-white hover:scale-[.98] active:scale-95 transition-all duration-100`}>
            {children}
            <h1>{name}</h1>
        </Link>
    )
}

export default CategoryBtn;