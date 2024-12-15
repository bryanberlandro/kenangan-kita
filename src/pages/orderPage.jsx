import MaxLayout from "../components/layouts/MaxLayout";
import { FaArrowLeft, FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderSidebar from "../components/fragments/OrderSidebar";
import CategoryBtnWrap from "../components/fragments/CategoryBtnWrap";
import ProdModal from "../components/fragments/ProdModal";
import ProductLayout from "../components/layouts/Order/ProductLayout";

export default function OrderPage(){
    const {tableId} = useParams();
    const [showModal, setShowModal] = useState(false)
    const [chosenProd, setChosenProd] = useState(null)
    const [showSidebar, setShowSidebar] = useState(false)
    const existingOrder = JSON.parse(localStorage.getItem('customers'));
    const currOrder = existingOrder?.find(order => order.table === tableId);

    useEffect(() => {
        if(currOrder){
            const orders = currOrder.orders
            if(orders.length > 0){
                setShowSidebar(true);
            } else {
                setShowSidebar(false);
            }
        }
    }, [currOrder?.orders])

    function handleShowModal(prod){
        setChosenProd(prod)
        console.log(prod)
        setShowModal(true)
    }

    return (
        <>
        <MaxLayout>
            <div className="flex h-max">
                <div className={`transition-all duration-300 w-full bg-neutral-50 h-max py-6 px-6`}>
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

                    <ProductLayout
                    showSidebar={showSidebar}
                    handleShowModal={handleShowModal}
                    />
                </div>
                <OrderSidebar
                showSidebar={showSidebar}
                currOrder={currOrder}
                />
            </div>
            <ProdModal
            showModal={showModal}
            setShowModal={setShowModal}
            data={chosenProd}
            />
        </MaxLayout>
        </>
    )
}