export function  CardTeam() {
    const team = [
        { name: "Sakha Naufal Huda", desc: "202143501152" },
        { name: "Bryan Berlandro", desc: "202143501152" }
    ];

    return (
        <div className="flex flex-col justify-between">
            {team.map((tim, index) => (
                <div
                    className="p-5 w-full h-[48%] items-center overflow-hidden flex border rounded-2xl gap-3"
                    key={index}
                >
                    <div className="w-[20%]">
                        <img
                            src="https://pluspng.com/img-png/png-user-icon-person-icon-png-people-person-user-icon-2240.png"
                            alt=""
                        />
                    </div>

                    <div>
                        <h1>{tim.name}</h1>
                        <p className="text-sm opacity-50">{tim.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
