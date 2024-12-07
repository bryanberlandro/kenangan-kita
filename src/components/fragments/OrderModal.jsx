import { FaXmark } from "react-icons/fa6"

const OrderModal = () => {
    return (
        <div className={`fixed w-full h-dvh inset-0 backdrop-blur-sm bg-seagull-50 bg-opacity-20 justify-center items-center hidden`}>
            <div className="rounded-lg w-[400px] h-max bg-white shadow-soft p-6">
                <div className="w-full flex justify-end">
                    <FaXmark/>
                </div>
                <div className="text-center">
                    <h1 className="font-semibold text-lg">Pesanan Baru</h1>
                    <p className="text-sm text-neutral-400">Beberapa langkah lagi untuk menyiapkan pesanan anda.</p>
                </div>

                <form action="" className="mt-6">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="table" className="font-semibold">Meja</label>
                        <input type="text" name="table" id="table" disabled className="bg-neutral-100 border-2 border-neutral-200 rounded-md py-2 px-4 text-neutral-400 font-medium" defaultValue="T-1"/>
                    </div>
                    <div className="flex flex-col gap-1 mt-4">
                        <label htmlFor="customer" className="font-semibold">Nama Kustomer</label>
                        <input type="text" name="customer" id="customer" className="py-2 px-4 rounded-md border-2" placeholder="john doe..."/>
                    </div>

                    <div className="flex gap-2">
                        <button className="w-1/2 text-center py-3 bg-white rounded-md mt-8 text-seagull-500 border-2 border-seagull-500 font-semibold">Book Pesanan</button>
                        <button type="submit" className="w-1/2 text-center py-3 bg-seagull-500 rounded-md mt-8 text-white font-semibold">Konfirmasi Pesanan</button>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default OrderModal