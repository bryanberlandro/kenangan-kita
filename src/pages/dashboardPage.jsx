import { useState } from "react";
import { Insight } from "../components/layouts/Dashboard/Insight";
import { OurTeam } from "../components/layouts/Dashboard/OurTeam";
import { PopularMenu } from "../components/layouts/Dashboard/PopularMenu";
import { ProfitToday } from "../components/layouts/Dashboard/ProfitToday";
import { RecentReview } from "../components/layouts/Dashboard/RecentReview";
import { TableMenuFavorite } from "../components/layouts/Dashboard/TableMenuFavorite";
import MaxLayout from "../components/layouts/MaxLayout";
import { OurTeamModal } from "../components/layouts/Dashboard/OurTeamModal";

export default function DashboardPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MaxLayout>
            <div className="xl:h-dvh  w-full flex justify-center  items-center">
                <div className="px-[5%] flex flex-col bg-neutral-50 w-full h-max gap-2">
                    <div className="w-full flex-col xl:flex-row h-full bg-slate-100 gap-2 flex">
                        <Insight />
                        <PopularMenu />
                    </div>
                    <div className="w-full flex flex-col xl:flex-row gap-2 xl:h-72">
                        <OurTeam
                            setIsOpen={setIsOpen}
                            isOpen={isOpen}
                        />
                        <ProfitToday />
                        <RecentReview />
                    </div>
                </div>
            </div>
            <div className="bg-neutral-50 p-[5%]">
                <TableMenuFavorite />
            </div>
            <OurTeamModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

        </MaxLayout>
    )
}