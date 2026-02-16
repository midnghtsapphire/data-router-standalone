import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PricingPage from './pages/PricingPage'
import SettingsPage from './pages/SettingsPage'
import AdminPage from './pages/AdminPage'
import NotFoundPage from './pages/NotFoundPage'
import DataRouterPage from './pages/DataRouterPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/data-router" element={<DataRouterPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
