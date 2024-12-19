/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ProdData } from "../../../data/ProdData";
import ProdCard from "../../fragments/ProdCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductLayout = ({handleShowModal, showSidebar, data, loading}) => {
    const { categoryId } = useParams()
    

    return (
        <>
        <div className={`flex flex-wrap gap-4 mt-6 transition-all ease-in-out ${showSidebar ? 'w-[75%]' : 'w-full'}`}>
            {
                loading ?
                <div className="text-neutral-400 font-semibold py-60 text-center w-full">
                    <p>Wait a moment...</p>
                </div>
                :
                data.data.map(prod => (
                    <ProdCard 
                    key={prod._id} 
                    category={prod.category}
                    name={prod.name}
                    price={prod.price}
                    onClick={() => handleShowModal(prod)}
                    />
                ))
            }
            <div className={`w-full py-10 text-center mt-4 font-bold text-neutral-400 ${loading ? "hidden" : "flex"}`}>
                <h1>Sudah gaada menu lagi...</h1>
            </div>
        </div>
        </>
    )
}

export default ProductLayout;