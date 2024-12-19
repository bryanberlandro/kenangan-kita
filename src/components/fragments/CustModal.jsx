/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6"

const CustModal = ({table}) => {
    const [errMsg, setErrMsg] = useState("")
    const [transition, setTransition] = useState('')
    const [showModal, setShowModal] = useState(false)

    function handleSetCus(e){
        e.preventDefault()
        const currentDate = new Date().toISOString();
        const formData = new FormData(e.currentTarget);
        const username = formData.get('customer');
        if(!username){
            return setErrMsg("Please enter your name!")
        }
        const storeData = [];
        const formValue = {
            id: table._id,
            table: table.tableId,
            customer: formData.get('customer'),
            orders: [],
            date: currentDate
        }
        storeData.push(formValue);
        localStorage.setItem('customers', JSON.stringify(storeData));
        window.location.href = `/order/${table.tableId}/All`
    }

    useEffect(() => {
        if(!table?.tableId){
            return setShowModal(false);
        }

        setShowModal(true)
    }, [table?.tableId])

    useEffect(() => {
        if(showModal){
            setTransition('opacity-100 scale-100')
        } else {
            setTransition('opacity-0 scale-0')
        }
    }, [showModal])

    function closeModal(){
        setTransition('opacity-0 scale-0')
        const timeout = setTimeout(() => {
            setShowModal(false);
        }, 100); 
        return () => clearTimeout(timeout);
    }
    
    return(
        <div className={`sticky w-full h-dvh inset-0 backdrop-blur-sm bg-opacity-20 justify-center items-center ${showModal ? 'flex':'hidden'}`}>
            <div className={`rounded-lg w-[450px] h-max bg-white shadow-soft p-6 transition-all ease-in-out ${transition}`}>
                <div className="w-full flex justify-end">
                    <FaXmark onClick={closeModal}/>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold text-lg">Pesanan Baru</h1>
                    <p className="text-sm text-neutral-400">Beberapa langkah lagi untuk menyiapkan pesanan anda.</p>
                </div>

                <form action="" className="mt-6" onSubmit={handleSetCus}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="table" className="font-medium text-sm">Meja</label>
                        <input type="text" name="table" id="table" disabled className="bg-neutral-100 border-2 border-neutral-200 rounded-md py-2 px-4 text-neutral-400 font-medium" defaultValue={table?.tableId?.toUpperCase()}/>
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <label htmlFor="customer" className="font-medium text-sm">Nama Kustomer</label>
                        <input type="text" name="customer" id="customer" className="py-2 px-4 rounded-md border-2" placeholder="john doe..."/>
                        <p className="text-xs text-bloods-600 font-semibold">{errMsg}</p>
                    </div>

                    <div className="flex gap-2">
                        <button className="w-1/2 text-center py-3 bg-white rounded-md mt-8 text-seagull-500 border-2 border-seagull-500 font-semibold btn-hover">Book Pesanan</button>
                        <button type="submit" className="w-1/2 text-center py-3 bg-bloods-700 rounded-md mt-8 text-white font-medium btn-hover">Konfirmasi Pesanan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustModal;