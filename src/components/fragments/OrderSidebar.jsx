/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import OrderCard from "./OrderCard";
import { useEffect, useState } from "react";

const OrderSidebar = ({showSidebar, currOrder}) => {
    const { tableId } = useParams();
    const [totalPrice, setTotalPrice] = useState(0)
    const [tax, setTax] = useState(0)
    const [newOrder, setNewOrder] = useState([])

    useEffect(() => {
        setNewOrder(currOrder.orders)
        console.log(currOrder.orders)
    }, [currOrder?.orders])

    useEffect(() => {
        if(currOrder?.orders?.length > 0){
            const sum = currOrder.orders.reduce((acc, cur) => acc + cur.total, 0)
            setTax(sum * 0.10)
            setTotalPrice(sum)
        }
    }, [currOrder?.orders])

    

    return (
        <div className={`bg-white shadow-soft p-4 transition-transform duration-300 transform ${showSidebar ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-full w-[25%] flex flex-col justify-between`}>
            <div>
                <div className="border-b-2 border-dotted pb-4">
                    <h1 className="font-bold text-lg text-bloods-800">Pesanan</h1>
                    <p className="font-medium text-neutral-400">Meja ( {tableId?.toUpperCase()} )</p>
                    <p>{currOrder?.customer}</p>
                </div>
                <div className="flex flex-col mt-4 max-h-[400px] overflow-y-scroll">
                    {
                        newOrder.map(order => (
                            <OrderCard
                            name={order.name}
                            key={order.id}
                            id={order.id}
                            quantity={order.quantity}
                            total={order.total}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="border-t-2 border-dotted mt-10 py-3">
                    <div className="flex items-center justify-between text-neutral-500 text-sm">
                        <h1>Subtotal</h1>
                        <p>{totalPrice}</p>
                    </div>
                    <div className="flex items-center justify-between text-neutral-500 text-sm">
                        <h1>PPN</h1>
                        <p>{tax}</p>
                    </div>
                    <div className="flex items-center justify-between font-medium">
                        <h1>Total</h1>
                        <p>{totalPrice + tax}</p>
                    </div>
                </div>
                <button className="btn-hover bg-bloods-700 text-white rounded-lg w-full text-center py-2 mt-4">Confirm Orders</button>
            </div>
        </div>
    )
}

export default OrderSidebar;