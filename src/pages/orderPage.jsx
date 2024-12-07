import MaxLayout from "../components/layouts/MaxLayout";
import { FaArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import OrderSidebar from "../components/fragments/OrderSidebar";
import ProdCard from "../components/fragments/ProdCard";
import CategoryBtnWrap from "../components/fragments/CategoryBtnWrap";

export default function OrderPage(){
    const {tableId} = useParams();
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <>
        <MaxLayout>
            <div className="flex h-max">
                <div className={`transition-all duration-300 ${sidebarVisible ? "w-[70%]" : "w-full"} bg-neutral-50 h-max py-6 px-6`}>
                    <div className="flex items-center gap-6 font-bold text-lg">
                        <Link to={'/order'}>
                            <FaArrowLeft/>
                        </Link>
                        <h1>Pesanan Meja #{tableId?.toUpperCase()}</h1>
                    </div>
                    <div className="w-[500px] p-2 bg-white rounded-md flex h-12 mt-8 shadow-soft">
                        <input 
                        type="text" 
                        placeholder="French fries, Matcha, Hazelnut Latte..." 
                        className="w-[85%] outline-none"
                        />
                        <div className="bg-seagull-500 rounded-md h-full w-[15%] text-white flex justify-center items-center">
                            <FaMagnifyingGlass/>
                        </div>
                    </div>

                    <div className="mt-6">
                        <CategoryBtnWrap/>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <ProdCard onClick={() => setSidebarVisible(true)}/>
                        <div className="w-full py-10 text-center mt-4 font-bold text-neutral-400">
                            <h1>Sudah gaada menu lagi...</h1>
                        </div>
                    </div>
                </div>
                <OrderSidebar
                isVisible={sidebarVisible}
                />
            </div>
        </MaxLayout>
        </>
    )
}