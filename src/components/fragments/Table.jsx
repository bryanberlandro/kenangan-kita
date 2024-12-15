/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Table = ({table, onClick}) => {
    return (
        <div onClick={onClick} className="flex items-center gap-1.5 cursor-pointer hover:scale-[.98] active:scale-95 ">
            <div className="rounded-full h-9 w-9 shadow-soft bg-white"></div>
                <div className="flex justify-center items-center bg-white rounded-full p-4 shadow-soft">
                    <div className="rounded-full bg-bloods-400 text-white w-14 h-14 flex items-center justify-center font-bold border-4 border-bloods-100">{table.toUpperCase()}</div>
                </div>
            <div className="rounded-full h-9 w-9 shadow-soft bg-white"></div>
        </div>
    )
}

export default Table