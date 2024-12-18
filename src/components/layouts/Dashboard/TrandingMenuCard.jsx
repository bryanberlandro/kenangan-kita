export function TrandingMenuCard() {
    const popular = [
        { name: "Kenangan Kena Gigimu", price: "Rp. 35.000", total: 250, img: "https://static.vecteezy.com/system/resources/previews/011/048/029/original/iced-coffee-watercolor-set-free-png.png" },
        { name: "Kenangan DiKamarKu", price: "Rp. 20.000", total: 200, img: "https://www.pngmart.com/files/21/Coffee-PNG.png" },
        { name: "Kenangan DirumahKu", price: "Rp. 69.000", total: 100, img: "https://www.pngarts.com/files/1/Coffee-PNG-Image-with-Transparent-Background.png" }
    ];

    return (
        <div>
            {popular.map((menu, index) => (
                <div
                    key={index}
                    className="border-b border-opacity-5 p-3 flex items-center justify-between"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-16">
                            <img src={menu.img} alt={menu.name} />
                        </div>
                        <div className="text-sm">
                            <h1 className="font-medium">{menu.name}</h1>
                            <p className="opacity-70">{menu.price}</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium">{menu.total}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
