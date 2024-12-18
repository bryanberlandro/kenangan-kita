/* eslint-disable react/prop-types */
export function CardOurTeamProfil({ name, npm, img }) {
    return (
        <div className="w-60 h-64 text-center rounded-2xl overflow-hidden flex flex-col relative border">
            <div className="w-full h-full">
                <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute bg-white bg-opacity-95 px-5 py-2 w-56 transform -translate-x-1/2 bottom-2 left-1/2 rounded-lg">
                <p className="font-medium">{name}</p>
                <p className="opacity-80">{npm}</p>
            </div>
        </div>
    );
}
