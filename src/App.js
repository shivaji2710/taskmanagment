import React from 'react'
import CreateAdmin from './Components/CreateAdmin'
import { Route, Routes } from 'react-router-dom'
import AdminDashbord from './AdminDashbord'
import Deapartment from './Components/Deapartment'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import Branch from './Components/Branch'
import Login from './Components/Login'
import Roles from './Components/Roles'
import Team from './Components/Team'

function App() {

  return (
    <div>
        <Routes>
          <Route path="/AdminDashbord" element={<AdminDashbord/>}/>
          <Route path="/" element={<CreateAdmin/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/nav" element={<Nav/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>
          <Route path="/roles" element={<Roles/>}/>
          <Route path="/branch" element={<Branch/>}/>
          <Route path="/deapartment" element={<Deapartment/>}/>
          <Route path="/team" element={<Team/>}/>
        </Routes>
    </div>
  )
}

export default App


