import { PiHandHeartFill } from "react-icons/pi";
import Blob from '../../elements/Blob.svg';


export function Insight() {
    return (
        <div className="relative overflow-hidden rounded-2xl justify-between p-5 flex-col flex h-80 bg-white shadow-multiple">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <PiHandHeartFill className="text-bloods-700  text-4xl" />
                    <h1 className="text-2xl font-medium">Favorite Menu</h1>
                </div>
                <div>
                    <p className="text-sm text-black opacity-35 hover:opacity-100">Displays the most ordered products to track sales trends and support business decisions.</p>
                </div>
            </div>

            <div className="flex justify-between items-end">
                <div className=" w-[30%] h-[50%] flex justify-center flex-col items-center">
                    <h1 className="text-5xl font-medium">+50%</h1>
                    <p className="text-xs text-center opacity-35">apehal ni aku pun taktaw la ini apa aneh juga le</p>
                </div>
                <div className="w-[60%] justify-center flex z-20">
                    <img src="https://pluspng.com/img-png/coffee-png-cup-coffee-png-1600.png" alt="" className="w-[80%]"/>
                </div>
            </div>

            <img src={Blob} alt="" className="absolute bottom-0 translate-y-40 w-96 translate-x-32 left-72"/>
        </div>
    )
}