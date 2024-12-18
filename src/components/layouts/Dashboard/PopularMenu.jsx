import { TrandingMenuCard } from "./TrandingMenuCard";

export function PopularMenu() {
    return (
        <div className="xl:w-[34%] text-white overflow-hidden rounded-2xl gap-3 p-5 flex-col flex bg-gradient-to-bl from-bloods-950 via-red-800 to-bloods-950 shadow-multiple">
            <h1 className="text-lg font-medium">Tranding Menu</h1>
            <div className="flex flex-col">
                <TrandingMenuCard/>
            </div>
        </div>
    )
}