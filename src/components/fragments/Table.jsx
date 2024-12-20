import { useEffect, useState } from "react";
import LilModal from "./LilModal"
import axios from "axios";

/* eslint-disable react/prop-types */
const Table = ({tableId, status, setTable, data}) => {
    const role = JSON.parse(localStorage.getItem('role'))
    const [selectedTable, setSelectedTable] = useState(null); 
    const [customerName, setCustomerName] = useState("")
    const [currTable, setCurrTable] = useState(null)

    useEffect(() => {
        if(currTable){
            const fetchData = async() => {
                try {
                    const res = await axios.get(`https://kenangan-kita-api.vercel.app/order-table/${currTable}`)
                    console.log(res.data.data)
                    setCustomerName(res.data.data[0].customerName)
                } catch (error) {
                    console.log(error)
                }
            }
    
            fetchData()
            return 
        }
    }, [currTable])

    function handleTable() {
        console.log(data)
        setCurrTable(data._id)
        if (status === "Occupied") {
            if (role.role === "admin") {
                setSelectedTable((prev) => (prev === tableId ? null : tableId));
            }
            return;
        }
        setTable(data);
    }

    function handleConfirmPayment(orderId) {
        axios
            .put(`https://kenangan-kita-api.vercel.app/update-order?id=${orderId}`, { status: "Paid" })
            .then((response) => {
                console.log("Order updated:", response.data);
                setSelectedTable(null); 
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error updating order status:", error.response?.data || error.message);
            });
    }

    return (
        <>
        <div onClick={handleTable} className="cursor-pointer relative flex items-center gap-1.5">
            <div className="rounded-full h-9 w-9 shadow-soft bg-white"></div>
                <div className="flex justify-center items-center bg-white rounded-full p-4 shadow-soft">
                    <div className={`rounded-full ${status === "Occupied" ? "bg-neutral-400 text-neutral-800 border-neutral-200" : "bg-bloods-400 text-white border-bloods-100"}  w-14 h-14 flex items-center justify-center font-bold border-4 `}>{tableId.toUpperCase()}</div>
                </div>
            <div className="rounded-full h-9 w-9 shadow-soft bg-white"></div>
            {selectedTable === tableId && (
                    <LilModal
                        customerName={customerName} 
                        orderId={data.currentOrder}
                        onConfirmPayment={() => handleConfirmPayment(data.currentOrder)}
                    />
                )}
        </div>
        </>
    )
}

export default Table