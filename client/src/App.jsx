import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import './App.css'
import activityTitle from './assets/activityTitle.json'
import gamesActive from './assets/gamesActive.json'
import Footer from './components/common/footer'
import Navbar from './components/common/navbar'
import { useAuthContext } from './context/auth-context'
import Activity from './pages/activity/activity'
import ActivityHome from './pages/activity/activity-home'
import ChildDashboard from './pages/ChildDashboard'
import Games from './pages/Games'
import GamesSec from './pages/gamesSec'
import Homepage from './pages/homepage'
import Login from './pages/login'
import ParentDashboard from './pages/parent-dashboard'
import ParentChild from './pages/ParentChild'
import Register from './pages/register'
import Story from './pages/stories'

import { Toaster } from 'react-hot-toast'

//! import Activity from "./pages/Activity";
//! import ActivityHome from "./pages/ActivityHome";
//! import ChildForm from "./pages/ChildForm";

function App() {
  const location = useLocation()
  const { authUser } = useAuthContext()

  return (
    <>
      {location.pathname !== '/register' && location.pathname !== '/login' && (
        <Navbar />
      )}
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route
          element={authUser ? <Navigate to="/" /> : <Login />}
          path="/login"
        />
        <Route
          element={authUser ? <Navigate to="/" /> : <Register />}
          path="/register"
        />
        {/* <Route element={<ChildDashboard />} path="/child-dashboard" /> */}
        {/* <Route element={<ChildInfo />} path="/child-info" /> */}
        {/* <Route element={<ChildSkill />} path="/child-skill" /> */}
        {/* <Route element={<ParentChild />} path="/parent-child" /> */}
        <Route
          element={authUser ? <ParentDashboard /> : <Navigate to="/login" />}
          path="/parent-dashboard"
        />
        <Route
          element={authUser ? <Story /> : <Navigate to="/login" />}
          path="/stories"
        />
        <Route
          element={authUser ? <ChildDashboard /> : <Navigate to="/login" />}
          path="/child-dashboard"
        />
        <Route
          element={authUser ? <ParentChild /> : <Navigate to="/login" />}
          path="/parent-child-test"
        />
        <Route
          element={authUser ? <Games /> : <Navigate to="/login" />}
          path="/games"
        />
        {gamesActive.active.map((e) => (
          <Route
            key={e.title}
            element={
              authUser ? <GamesSec cdn={e.cdn} /> : <Navigate to="/login" />
            }
            path={e.link}
          />
        ))}
        <Route
          element={authUser ? <ActivityHome /> : <Navigate to="/login" />}
          path="/activity"
        />
        {activityTitle.active.map((e) => (
          <Route
            key={e.title}
            element={
              authUser ? <Activity title={e.title} /> : <Navigate to="/login" />
            }
            path={e.link}
          />
        ))}
        {/* <Route path="/child-form" element={<ChildForm />} /> */}
        {/* <Route path="/games" element={<Games />} />------ */}
      </Routes>
      {location.pathname !== '/register' && location.pathname !== '/login' && (
        <Footer />
      )}
      <Toaster />
    </>
    // <Stories />
  )
}

export default App
