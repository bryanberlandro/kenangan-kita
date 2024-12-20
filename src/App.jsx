import { BrowserRouter, HashRouter, Navigate, Route, Routes } from "react-router-dom"
import DashboardPage from "./pages/dashboardPage"
import { Sidebar } from "./components/fragments/Sidebar"
import TablePage from "./pages/tablePage"
import OrderPage from "./pages/orderPage"
import { Header } from "./components/fragments/Header"
import { useState } from "react"

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  
  return (
    <HashRouter>
      <Header onClick={()=>setIsSidebarActive(!isSidebarActive)}/>
      <Sidebar isSidebarActive={isSidebarActive}/>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/order" element={<TablePage/>}/>
        <Route path="/order/:tableId/:categoryId" element={<OrderPage/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
