import Login from './pages/Login/Login'
import Unlock from './pages/Unlock/Unlock'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './index.css'
import AppsDashboard from './pages/AppsDashboard/AppsDashboard'
import StudentDashboard from './pages/StudentDashboard/StudentDashboard'

function App() {
  const isAuthenticated = true

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path='/' element={<StudentDashboard />} />
        ) : (
          <Route path='/' element={<Navigate to='/login' replace />} />
        )}
        <Route path='/login' element={<Login />} />
        <Route path='/unlock' element={<Unlock />} />
        <Route path='/apps-dashboard' element={<AppsDashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
