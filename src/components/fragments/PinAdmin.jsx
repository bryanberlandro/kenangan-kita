import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const PinAdmin = () => {
    const [transition, setTransition] = useState('')
    const [showModal, setShowModal] = useState(false)

    function closeModal(){
        setTransition('opacity-0 scale-0')
        const timeout = setTimeout(() => {
            setShowModal(false);
        }, 100); 
        return () => clearTimeout(timeout);
    }
    

    return(
        <div className={`sticky w-full h-dvh inset-0 backdrop-blur-sm bg-opacity-20 justify-center items-center ${showModal ? 'flex':'flex'}`}>
            <div className={`rounded-lg w-[450px] h-max bg-white shadow-soft p-6 transition-all ease-in-out ${transition}`}>
                <div className="w-full flex justify-end">
                    <FaXmark onClick={closeModal}/>
                </div>
                <div className="bg-bloods-700 p-1">
                    <input type="text"className="bg-bloods-100 outline-none"/>
                </div>
            </div>
        </div>
    )
}

export default PinAdmin;