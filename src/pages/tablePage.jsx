import { MdTableBar } from "react-icons/md";
import MaxLayout from "../components/layouts/MaxLayout";
import { BiCalendar } from "react-icons/bi";
import StatusBadge from "../components/elements/StatusBadge";
import { getDate } from "../utils/getDate";
import TableLayout from "../components/layouts/Order/TableLayout";
import { useEffect, useState } from "react";
import CustModal from "../components/fragments/CustModal";

export default function TablePage(){
    const [ table, setTable ] = useState(null)

    useEffect(() => {
        console.log(table)
    }, [table]) 

    return(
        <>
        <MaxLayout>
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex gap-2 items-center text-bloods-800">
                    <MdTableBar className="text-2xl"/>
                    <h1 className="text-2xl font-semibold">Order</h1>
                </div>
                <div className="flex text-neutral-400 items-center gap-2">
                    <BiCalendar/>
                    <h1>{getDate()}</h1>
                </div>
            </div>
            <div className="flex gap-10 items-center px-6 mt-10">
                <StatusBadge status="Available"/>
                <StatusBadge status="Booked"/>
                <StatusBadge status="Occupied"/>
            </div>
            <div className="bg-neutral-100 pb-6 px-6 mt-4">
                <div className="mx-auto bg-white px-10 py-4 w-max rounded-b-full text-bloods-700 font-medium shadow-soft">
                    <h1>CASHIER</h1>
                </div>
                <TableLayout setTable={setTable}/>
            </div>
            <CustModal table={table}/>
        </MaxLayout>
        </>
    )
}