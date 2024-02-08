import React from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/404'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import SignIn from './pages/auth/SignIn'
import Signup from './pages/auth/Signup'
import Dashbord from './pages/user/Dashbord'
import ProtectedRoute from './components/Route/ProtectedRoute'
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<ProtectedRoute/>}>
        <Route path='' element={<Dashbord/>}/>
        </Route>
      
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
      
  )
}

export default App