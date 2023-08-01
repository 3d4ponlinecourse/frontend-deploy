import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useAuth } from './providers/AuthProvider'
import Navbar from './components/Navbar'
import GuardedRoute from './guards/GuardedRoute'
import Home from './pages/Home'
import LearningPage from './pages/LearningPage'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="bg-white">
      <Toaster position="top-center" />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="/contentcourse" element={<ContentCourse />} /> */}
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/learn/:id" element={<LearningPage />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
