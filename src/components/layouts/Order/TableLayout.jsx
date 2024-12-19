/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Table from "../../fragments/Table"
import axios from "axios"

const TableLayout = ({setTable}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('https://kenangan-kita-api.vercel.app/tables')
                console.log(response.data)
                setData(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return(
        <div className="flex flex-wrap gap-8 py-4 px-6 mt-4 justify-center">
            {
                loading ?
                <p>Loading...</p>
                :
                data.tables.map(t => (
                    <Table key={t._id} status={t.status} tableId={t.tableId} onClick={() => setTable(t)}/>
                ))
            }
        </div>
    )
}

export default TableLayout;