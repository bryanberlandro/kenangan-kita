/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6"

const CustModal = ({table}) => {
    const existingCustomer = JSON.parse(localStorage.getItem('customers'));
    function handleSetCus(e){
        e.preventDefault()
        const currentDate = new Date().toISOString();
        const formData = new FormData(e.currentTarget);
        const storeData = [];
        const formValue = {
            table: table,
            customer: formData.get('customer'),
            orders: [],
            date: currentDate
        }
        if(existingCustomer?.length > 0){
            localStorage.setItem('customers', JSON.stringify([...existingCustomer, formValue]));
            window.location.href = `/order/${table}/all`
            return
        }
        storeData.push(formValue);
        localStorage.setItem('customers', JSON.stringify(storeData));
        window.location.href = `/order/${table}/all`
    }
    
    return(
        <div className={`fixed w-full h-dvh inset-0 backdrop-blur-sm bg-seagull-50 bg-opacity-20 justify-center items-center ${table ? 'flex':'hidden'}`}>
            <div className="rounded-lg w-[450px] h-max bg-white shadow-soft p-6">
                <div className="w-full flex justify-end">
                    <FaXmark/>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold text-lg">Pesanan Baru</h1>
                    <p className="text-sm text-neutral-400">Beberapa langkah lagi untuk menyiapkan pesanan anda.</p>
                </div>

                <form action="" className="mt-6" onSubmit={handleSetCus}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="table" className="font-medium text-sm">Meja</label>
                        <input type="text" name="table" id="table" disabled className="bg-neutral-100 border-2 border-neutral-200 rounded-md py-2 px-4 text-neutral-400 font-medium" defaultValue={table?.toUpperCase()}/>
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <label htmlFor="customer" className="font-medium text-sm">Nama Kustomer</label>
                        <input type="text" name="customer" id="customer" className="py-2 px-4 rounded-md border-2" placeholder="john doe..."/>
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