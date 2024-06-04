import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Layout from "./pages/Layout"
import Main from "./pages/Main"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />} path="dashboard">
          <Route index element={<Navigate replace to="main" />} />
          <Route path='main' index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
