    export function TrandingMenuCard({ menu }) {
        return (
            <div>
                <div
                    key={menu._id}
                    className="border-b border-opacity-5 p-3 flex items-center justify-between"
                >
                    <div className="flex items-center gap-5">
                        <div className="w-16">
                            <img src={menu.image} alt={menu.name} />
                        </div>
                        <div className="text-sm">
                            <h1 className="font-medium">{menu.name}</h1>
                            <p className="opacity-70">{menu.price}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">{menu.totalRating}</p>
                    </div>
                </div>
            </div>
        );
    }
