import { Insight } from "../components/layouts/Dashboard/Insight";
import { OurTeam } from "../components/layouts/Dashboard/OurTeam";
import { PopularMenu } from "../components/layouts/Dashboard/PopularMenu";
import { ProfitToday } from "../components/layouts/Dashboard/ProfitToday";
import { RecentReview } from "../components/layouts/Dashboard/RecentReview";
import { TableMenuFavorite } from "../components/layouts/Dashboard/TableMenuFavorite";
import MaxLayout from "../components/layouts/MaxLayout";

export default function DashboardPage() {
    return (
        <MaxLayout>
            <div className="p-[5%] justify-between flex bg-neutral-50 w-full h-full">
                <div className="w-[60%] flex flex-col justify-between">
                    <div className="">
                        <Insight />
                    </div>
                    <div className="flex justify-between h-[43%]">
                        <OurTeam />
                        <ProfitToday />
                    </div>
                </div>
                <div className="w-[38%] flex flex-col justify-between h-full">
                    <PopularMenu/>
                    <RecentReview />
                </div>
            </div>


            <div className="bg-neutral-50 p-[5%]">
                <TableMenuFavorite/>
            </div>
        </MaxLayout>
    )
}