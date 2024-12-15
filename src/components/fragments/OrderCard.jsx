import { FaTrash } from "react-icons/fa6";
import { useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const OrderCard = ({name, quantity, total, id}) => {
    const existingOrder = JSON.parse(localStorage.getItem('customers'));
    const { tableId } = useParams()
    

    function handleRemoveOrder(){
        const currOrder = existingOrder.find(o => o.table === tableId);
        if(currOrder){
            const updatedOrders = currOrder.orders.filter(o => o.id !== id)
            currOrder.orders = updatedOrders;
            const updatedCustomer = existingOrder.map(dt => 
                dt.table === tableId ? currOrder : dt
            );

            localStorage.setItem('customers', JSON.stringify(updatedCustomer));
            return
        }
        console.log(existingOrder)
    }

    return(
        <div className="flex gap-2 h-max p-2 border-b-2 border-neutral-100">
            <div className="w-[30%] h-full bg-neutral-100 rounded-lg"></div>
            <div className="w-[70%]">
                <div className="flex justify-between w-full">
                    <h1 className="font-medium text-sm select-none">{name}</h1>
                    <FaTrash onClick={handleRemoveOrder} className="text-bloods-700"/>
                </div>
                <p className="text-neutral-400 font-medium text-xs select-none">Spicy</p>
                <div className="flex justify-between mt-2">
                    <p className="text-bloods-400 select-none">{quantity}x</p>
                    <p className="text-seagull-500 font-medium select-none">Rp {total}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;