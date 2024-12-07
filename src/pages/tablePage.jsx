import { MdTableBar } from "react-icons/md";
import Table from "../components/fragments/Table";
import MaxLayout from "../components/layouts/MaxLayout";
import { BiCalendar } from "react-icons/bi";
import StatusBadge from "../components/elements/StatusBadge";
import { getDate } from "../utils/getDate";
import OrderModal from "../components/fragments/OrderModal";

export default function TablePage(){
    const curDate = new Date();
    

    console.log(curDate)
    return(
        <>
        <MaxLayout>
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex gap-2 items-center text-seagull-600">
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
            <div className="flex flex-wrap gap-10 bg-slate-100 py-4 px-6 mt-4">
                <Table/>
                <Table/>
                <Table/>
                <Table/>
            </div>
            <OrderModal/>
        </MaxLayout>
        </>
    )
}