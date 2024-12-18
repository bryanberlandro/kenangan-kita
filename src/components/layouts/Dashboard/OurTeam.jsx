/* eslint-disable react/prop-types */

import { CardTeam } from "../../elements/CardTeam";

export function OurTeam({ setIsOpen, isOpen }) {

    return (
        <div className="w-full xl:w-1/3 h-full overflow-hidden rounded-2xl justify-between p-5 flex-col flex bg-white shadow-multiple">
            <div className="flex justify-between items-center">
                <h1 className="font-medium text-lg">{`Our Team's`}</h1>
                <p
                    className="opacity-45 underline text-sm hover:opacity-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    See all
                </p>
            </div>

            <div className="flex flex-col justify-between">
                <CardTeam />
            </div>

        </div>
    )
}