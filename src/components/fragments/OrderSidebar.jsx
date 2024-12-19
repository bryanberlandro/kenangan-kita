/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import OrderCard from "./OrderCard";
import { useEffect, useState } from "react";
import { convertRupiah } from "../../utils/convertRupiah";
import axios from "axios";
import Loader from "../elements/Loader";
import Alert from "../elements/Alert";

const OrderSidebar = ({showSidebar, currOrder, setShowSidebar}) => {
    const { tableId } = useParams();
    const [totalPrice, setTotalPrice] = useState(0)
    const [tax, setTax] = useState(0)
    const [newOrder, setNewOrder] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    useEffect(() => {
        setNewOrder(currOrder.orders || [])
    }, [currOrder.orders])

    useEffect(() => {
        if(newOrder.length > 0){
            const sum = newOrder.reduce((acc, cur) => acc + cur.total, 0)
            setTax(sum * 0.10)
            setTotalPrice(sum)
            return
        }
        setTax(0)
        setTotalPrice(0)
    }, [newOrder, currOrder.orders])

    const handleUpdateOrders = (updatedOrders) => {
        setNewOrder(updatedOrders);
        setShowSidebar(false)
    };

    function formatOrdersForDatabase(order) {
        return {
            table: order.id,
            customerName: order.customer,
            orders: order.orders.map((o) => ({
                menu: o._id,
                quantity: o.quantity,
            })),
            totalAmount: totalPrice + tax,
        };
    }
    

    async function handleConfirmOrder() {
        const formattedOrder = formatOrdersForDatabase(currOrder);
        console.log(formattedOrder)
        setLoading(true)
        try {
            const response = await axios.post(
                "http://localhost:3000/create-order",
                formattedOrder
            );
            console.log("Order berhasil disimpan:", response.data);
            setShowSidebar(false);
            setLoading(false);
            setStatus(200)
            const timeout = setTimeout(() => window.location.href = "/order", 3000);
            return () => clearTimeout(timeout);
        } catch (error) {
            console.error("Gagal menyimpan order:", error);
            setLoading(false)
            setStatus(500)
        }
    }
    

    return (
        <div className={`bg-white shadow-soft p-4 transition-transform duration-300 transform ${showSidebar && tax !== 0 ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 h-full w-[25%] flex flex-col justify-between`}>
                <Alert status={status}/>
            <div>
                <div className="border-b-2 border-dotted pb-4">
                    <h1 className="font-bold text-lg text-bloods-800">Pesanan</h1>
                    <p className="font-medium text-neutral-400">Meja ( {tableId?.toUpperCase()} )</p>
                    <p>{currOrder?.customer}</p>
                </div>
                <div className="flex flex-col mt-4 max-h-[400px] overflow-y-scroll">
                    {
                        newOrder.length === 0
                        ?
                        <div className="pt-20 text-neutral-400 font-bold text-center">
                            <p>No items</p>
                        </div>
                        :
                        newOrder.map(order => (
                            <OrderCard
                            name={order.name}
                            key={order.id}
                            id={order._id}
                            quantity={order.quantity}
                            total={order.total}
                            onRemove={(updatedOrders) => handleUpdateOrders(updatedOrders)}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="border-t-2 border-dotted mt-10 py-3">
                    <div className="flex items-center justify-between text-neutral-500 text-sm">
                        <h1>Subtotal</h1>
                        <p>{convertRupiah(totalPrice)}</p>
                    </div>
                    <div className="flex items-center justify-between text-neutral-500 text-sm">
                        <h1>PPN</h1>
                        <p>{convertRupiah(tax)}</p>
                    </div>
                    <div className="flex items-center justify-between font-medium">
                        <h1>Total</h1>
                        <p>{convertRupiah(totalPrice + tax)}</p>
                    </div>
                </div>
                <button onClick={handleConfirmOrder} className="btn-hover bg-bloods-700 text-white rounded-lg w-full text-center py-2 mt-4 flex justify-center  items-center">
                    {
                        loading ?
                        <Loader/>
                        :
                        "Confirm Orders"
                    }
                </button>
            </div>
        </div>
    )
}

export default OrderSidebar;