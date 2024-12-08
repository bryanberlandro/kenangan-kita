export function TableMenuFavorite() {
    const menus = [
        { name: "Latte", taste: 120, price: 4.8, frequency: 95, score: 85.0, rank: 1 },
        { name: "Cappuccino", taste: 90, price: 4.5, frequency: 80, score: 80.0, rank: 2 },
        { name: "Espresso", taste: 75, price: 4.0, frequency: 65, score: 75.0, rank: 3 },
        { name: "Americano", taste: 50, price: 3.8, frequency: 50, score: 65.0, rank: 4 },
        { name: "Mocha", taste: 40, price: 3.5, frequency: 45, score: 60.0, rank: 5 },
        { name: "Macchiato", taste: 95, price: 4.2, frequency: 70, score: 78.0, rank: 6 },
        { name: "Flat White", taste: 85, price: 4.0, frequency: 60, score: 74.0, rank: 7 },
        { name: "Irish Coffee", taste: 60, price: 3.9, frequency: 55, score: 68.0, rank: 8 },
        { name: "Caramel Latte", taste: 45, price: 3.6, frequency: 40, score: 62.0, rank: 9 },
        { name: "Vanilla Cold Brew", taste: 35, price: 3.2, frequency: 30, score: 58.0, rank: 10 },

    ];
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Favorite Coffee Menu</h1>
            <table className="min-w-full border border-bloods-300 rounded-md overflow-hidden">
                <thead className="bg-bloods-100">
                    <tr>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Rank</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Menu</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Taste</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Price</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Frequency</th>
                        <th className="border border-bloods-300 px-4 py-2 text-center">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map((menu, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-bloods-50"
                                } hover:bg-bloods-100 transition-colors`}
                        >
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.rank}</td>
                            <td className="border border-bloods-300 px-4 py-2 ">{menu.name}</td>
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.taste}</td>
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.price}</td>
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.frequency}</td>
                            <td className="border border-bloods-300 px-4 py-2 text-center">{menu.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}