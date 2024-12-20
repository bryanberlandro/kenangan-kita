import { MdTableBar } from "react-icons/md";
import MaxLayout from "../components/layouts/MaxLayout";
import { BiCalendar } from "react-icons/bi";
import StatusBadge from "../components/elements/StatusBadge";
import { getDate } from "../utils/getDate";
import TableLayout from "../components/layouts/Order/TableLayout";
import { useEffect, useState } from "react";
import CustModal from "../components/fragments/CustModal";
import PinAdmin from "../components/fragments/PinAdmin";
import ReviewModal from "../components/fragments/ReviewModal";

export default function TablePage() {
    const [table, setTable] = useState(null)
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const orderData = JSON.parse(localStorage.getItem('customers'))


    useEffect(() => {
        if(orderData){
            console.log(orderData)
            const order = orderData[0].orders;
            if(order.length > 0){
                return setIsReviewModalOpen(true)
            }
        }
    }, [orderData])

    const handleCloseReviewModal = () => {
        setIsReviewModalOpen(false);
    };

    return (
        <>
            <MaxLayout>
                <div className="flex justify-between items-center px-6 py-4">
                    <div className="flex gap-2 items-center text-bloods-800">
                        <MdTableBar className="text-2xl" />
                        <h1 className="text-2xl font-semibold">Order</h1>
                    </div>
                    <div className="flex text-neutral-400 items-center gap-2">
                        <BiCalendar />
                        <h1>{getDate()}</h1>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-10 px-6">
                    <div className="flex gap-10 items-center ">
                        <StatusBadge status="Available" />
                        <StatusBadge status="Booked" />
                        <StatusBadge status="Occupied" />
                    </div>
                </div>
                <div className="bg-neutral-100 pb-6 px-6 mt-4">
                    <div className="mx-auto cursor-pointer bg-white px-10 py-4 w-max rounded-b-full text-bloods-700 font-medium shadow-soft">
                        <button
                        >CASHIER</button>
                    </div>
                    <TableLayout setTable={setTable} />
                </div>
                <PinAdmin />
                <CustModal table={table} />
                <ReviewModal isOpen={isReviewModalOpen} onClose={handleCloseReviewModal} setIsOpen={setIsReviewModalOpen}/>
            </MaxLayout>
        </>
    )
}