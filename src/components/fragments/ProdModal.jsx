/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaCartPlus, FaXmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const ProdModal = ({showModal, setShowModal, data}) => {
    const [transition, setTransition] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)
    const { tableId } = useParams()
    const customersData = JSON.parse(localStorage.getItem('customers'))

    useEffect(() => {
        if(showModal){
            setTransition('opacity-100 scale-100')
        } else {
            setTransition('opacity-0 scale-0')
        }
    }, [showModal])

    useEffect(() => {
        if(data){
            setPrice(data.price * quantity)
        }
    }, [quantity, data])

    function closeModal(){
        setTransition('opacity-0 scale-0')
        const timeout = setTimeout(() => {
            setShowModal(false);
        }, 100); 
        return () => clearTimeout(timeout);
    }

    function handleDecrease(){
        if(quantity == 1){
            return
        } 
        setQuantity(quantity - 1)
    }
    function handleIncrease(){
        setQuantity(quantity + 1)
    }

    function handleAddToCart(){
        const currOrder = customersData.find(dt => dt.table == tableId)
        if(currOrder){
            const existingOrder = currOrder.orders.find(curr => curr.id === data.id);
            if (existingOrder) {
                existingOrder.quantity += quantity; 
                existingOrder.total = existingOrder.quantity * data.price;
            } else {
                currOrder.orders.push({
                    ...data,
                    quantity,
                    total: price
                });
            }
    
            const updatedCustomer = customersData.map(dt => 
                dt.table === tableId ? currOrder : dt
            );

            localStorage.setItem('customers', JSON.stringify(updatedCustomer));
            setTransition('opacity-0 scale-0')
            const timeout = setTimeout(() => {
                setShowModal(false);
            }, 100); 
            setQuantity(1)
            return () => clearTimeout(timeout);
        }
    }

    return(
        <>
        <div className={`fixed w-full h-dvh inset-0 backdrop-blur-sm bg-seagull-50 bg-opacity-20 justify-center items-center ${showModal ? "flex" : "hidden"}`}>
            <div className={`rounded-lg px-4 h-max bg-white shadow-soft p-6 transition-all ease-in-out ${transition}`}>
                <div className="w-full text-lg cursor-pointer flex justify-end text-bloods-600">
                    <FaXmark onClick={closeModal}/>
                </div>
                <div className="flex mt-4 gap-4">
                    <div className="rounded-lg shadow-soft w-72 h-72"></div>
                    <div className="w-80">
                        <h1 className="font-semibold text-lg">{data?.name}</h1>
                        <p className="text-sm text-neutral-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita numquam mollitia vel ab laboriosam vero recusandae, incidunt reprehenderit alias dicta natus pariatur impedit ullam sed.</p>
                        <div className="mt-4">
                            <h1 className="text-sm font-semibold">Quantity</h1>
                            <div className="flex w-full text-sm justify-between mt-1">
                                <span onClick={handleDecrease} className="plus-min-btn">-</span>
                                <span className="px-4 py-1 w-1/2 text-center border-b-2 border-bloods-100 font-semibold select-none">{quantity}</span>
                                <span onClick={handleIncrease} className="plus-min-btn">+</span>
                            </div>
                        </div>
                        <div className="mt-8 text-end">
                            <h1 className="text-xl font-bold">Rp {price}</h1>
                        </div>
                        <button onClick={handleAddToCart} className="w-full mt-2 rounded-lg py-2.5 flex items-center justify-center gap-3 bg-bloods-700 text-white btn-hover">
                            <FaCartPlus/>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProdModal;