/* eslint-disable react/prop-types */
import { TableData } from "../../../data/TableData"
import Table from "../../fragments/Table"

const TableLayout = ({setTable}) => {
    const tableData = TableData

    return(
        <div className="flex flex-wrap gap-8 py-4 px-6 mt-4">
            {
                tableData.map(t => (
                    <Table key={t.id} table={t.table} onClick={() => setTable(t.table)}/>
                ))
            }
        </div>
    )
}

export default TableLayout;