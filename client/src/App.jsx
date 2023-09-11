import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from './Components/User'
import CreateUser from './Components/CreateUser'
import UpdateUser from './Components/UpdateUser'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<User />}></Route>
          <Route path='/CreateUser' element={<CreateUser />}></Route>
          <Route path='/UpdateUser/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App