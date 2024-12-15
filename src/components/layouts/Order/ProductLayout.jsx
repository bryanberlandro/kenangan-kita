/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ProdData } from "../../../data/ProdData";
import ProdCard from "../../fragments/ProdCard";
import { useParams } from "react-router-dom";

const ProductLayout = ({handleShowModal, showSidebar}) => {
    const { categoryId } = useParams()
    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        if(categoryId == "all"){
            setMenuData(ProdData)
        } else {
            const filteredData = ProdData.filter(p => p.category.toLowerCase() == categoryId?.toLowerCase())
            setMenuData(filteredData)
        }
    }, [categoryId])
    return (
        <>
        <div className={`flex flex-wrap gap-4 mt-6 transition-all ease-in-out ${showSidebar ? 'w-[75%]' : 'w-full'}`}>
            {
                menuData.map(prod => (
                    <ProdCard 
                    key={prod.id} 
                    category={prod.category}
                    name={prod.name}
                    price={prod.price}
                    onClick={() => handleShowModal(prod)}
                    />
                ))
            }
            <div className="w-full py-10 text-center mt-4 font-bold text-neutral-400">
                <h1>Sudah gaada menu lagi...</h1>
            </div>
        </div>
        </>
    )
}

export default ProductLayout;