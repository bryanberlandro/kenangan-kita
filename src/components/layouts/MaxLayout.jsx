/* eslint-disable react/prop-types */
const MaxLayout = ({children}) => {
    return (
        <div className="flex w-full xl:pl-60 relative">
            <div className="w-full h-max relative">
                {children}
            </div>
        </div>
    )
}


export default MaxLayout;