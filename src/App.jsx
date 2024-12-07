import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import DashboardPage from "./pages/dashboardPage"
import { Sidebar } from "./components/fragments/Sidebar"
import TablePage from "./pages/tablePage"
import OrderPage from "./pages/orderPage"

function App() {

  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/order" element={<TablePage/>}/>
        <Route path="/order/:tableId/:categoryId" element={<OrderPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App