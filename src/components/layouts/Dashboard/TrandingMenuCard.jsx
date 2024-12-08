export function TrandingMenuCard() {
    return (
        <div className="border-b border-opacity-5 p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-16">
                    <img src="https://www.pngarts.com/files/1/Coffee-PNG-Image-with-Transparent-Background.png" alt="" />
                </div>
                <div className="text-sm">
                    <h1 className="font-medium">Capuccino</h1>
                    <p className="opacity-70">Rp.35.000</p>
                </div>
            </div>
            <div>
                <p className="font-medium">250</p>
            </div>
        </div>
    )
}