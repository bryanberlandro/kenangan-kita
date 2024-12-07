/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const StatusBadge = ({status}) => {
    const [color, setColor] = useState("")

    useEffect(() => {
        if(status.toLowerCase() == "available"){
            setColor('bg-blue-400 border-blue-200')
        } else if(status.toLowerCase() == "booked"){
            setColor('bg-yellow-500 border-yellow-400')
        } else {
            setColor('bg-neutral-400 border-neutral-300')
        }
    }, [status])

    return (
        <div className="flex items-center gap-3">
            <div className={`w-5 h-5 ${color} rounded-full border-4`}></div>
            <h1 className="font-semibold">{status}</h1>
        </div>
    )
}

export default StatusBadge;