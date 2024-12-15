import { useState } from "react";
import { CardTeam } from "../../elements/CardTeam";
import { OurTeamModal } from "./OurTeamModal";

export function OurTeam() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div className="w-[49%] h-full overflow-hidden rounded-2xl justify-between p-5 flex-col flex bg-white shadow-multiple">
            <div className="flex justify-between items-center">
                <h1 className="font-medium text-lg">{`Our Team's`}</h1>
                <p
                    className="opacity-45 underline text-sm hover:opacity-100"
                    onClick={openModal}
                >
                    See all
                </p>
            </div>

            <div className="flex flex-col justify-between">
                <CardTeam />
            </div>

            <OurTeamModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    )
}