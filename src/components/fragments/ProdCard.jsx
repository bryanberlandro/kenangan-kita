/* eslint-disable react/prop-types */
const ProdCard = ({onClick, name, category, price}) => {
    return (
        <div onClick={onClick} className="rounded-lg p-2 cursor-pointer bg-white w-48 h-60 transition-all duration-75 hover:scale-[.98] shadow-soft hover:shadow-multiple">
            <div className="rounded-md bg-neutral-100 h-32 w-full"></div>
            <div className="mt-1">
                <h1 className="font-medium">{name}</h1>
                <p className="text-sm text-neutral-400">{category}</p>
                <h1 className="text-lg font-semibold mt-4 text-seagull-600">Rp {price}</h1>
            </div>
        </div>
    )
}

export default ProdCard;