/* eslint-disable react/prop-types */
const MaxLayout = ({children}) => {
    return (
        <div className="flex pl-60 relative">
            <div className="w-full h-dvh relative">
                {children}
            </div>
        </div>
    )
}


export default MaxLayout;