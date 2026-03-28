import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import App from './App'
import { AdminLayout } from './admin/AdminLayout'
import { Login } from './admin/Login'
import { Dashboard } from './admin/Dashboard'
import { ContentProvider } from './context/ContentContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  </StrictMode>
)