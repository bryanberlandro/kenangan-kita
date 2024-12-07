/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"

const OrderSidebar = ({isVisible}) => {
    const { tableId } = useParams();

    return (
        <div className={`bg-white shadow-soft p-4 transition-transform duration-300 transform ${isVisible ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-full w-[30%]`}>
            <div className="border-b-2 border-dotted pb-4">
                <h1 className="font-bold text-lg">Pesanan</h1>
                <p className="font-medium text-neutral-400">Meja ( {tableId?.toUpperCase()} )</p>
                {/* {
                    custData.map(dt => (
                        <p>{dt.customer}</p>
                    ))
                } */}
            </div>
            <div className="flex flex-col mt-4">
                {/* <OrderCard/>
                <OrderCard/>
                <OrderCard/> */}
            </div>
        </div>
    )
}

export default OrderSidebar;