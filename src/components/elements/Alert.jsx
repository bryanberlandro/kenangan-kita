import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Alert = ({status}) => {
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState(".")

    useEffect(() => {
        console.log(status)
        if(status !== null) {
            setShow(true)
            if(status === 200){
                setMsg("successfully added your order")
            } else {
                setMsg("Failed to add your order")
            }
        } else {
            setShow(false)
        }
    }, [status])
    
    useEffect(() => {
        if (show) {
            const timeout = setTimeout(() => setShow(false), 3000);
            return () => clearTimeout(timeout); // Bersihkan timeout jika show berubah sebelum waktu selesai
        }
    }, [show]);

    return (
        <div 
        className={`fixed right-2 transition-all duration-300 top-10 p-4 mb-4 text-sm text-red-800 rounded-lg ${show ? "translate-x-0" : "translate-x-96"} ${status === 200 ? "bg-green-50 dark:bg-green-300 dark:text-green-800" : "bg-red-50 dark:bg-gray-800 dark:text-red-400"}`} 
        role="alert">
            {
                status === 200
                ?
                <span className="font-medium">{msg}</span>
                :
                <span className="font-medium">{msg}</span>
            }
        </div>
    )
}

export default Alert;