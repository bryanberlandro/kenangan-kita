import { useEffect, useState } from "react";

export function ProfitToday() {
    const [profitToday, setProfitToday] = useState(0); 

    useEffect(() => {
        async function fetchProfit() {
            try {
                const response = await fetch("https://kenangan-kita-api.vercel.app/total-income");
                const result = await response.json();

                if (response.ok && result.status === 200) {
                    setProfitToday(result.totalIncome); 
                } else {
                    console.error("Failed to fetch profit:", result.message);
                }
            } catch (error) {
                console.error("Error fetching profit:", error);
            }
        }

        fetchProfit();
    }, []); 

    return (
        <div className="xl:w-1/3 w-full h-full overflow-hidden rounded-2xl justify-between p-5 flex-col flex bg-gradient-to-br from-bloods-900 to-bloods-700 text-white via-bloods-950 shadow-multiple">
            <h1 className="text-lg font-medium">Total Transactions</h1>
            <div className="flex items-center justify-center">
                <h1 className="text-3xl font-medium">Rp. {profitToday.toLocaleString("id-ID")}</h1>
            </div>
            <p className="text-sm">Profit Today</p>
        </div>
    );
}
