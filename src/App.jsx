import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import RequireAuth from './auth/RequireAuth.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import ItemDetail from './pages/ItemDetail.jsx'
import ReportFound from './pages/ReportFound.jsx'
import ReportLost from './pages/ReportLost.jsx'
import Account from './pages/Account.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import AuthCallback from './pages/AuthCallback.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="procurar" element={<Search />} />
        <Route path="objeto/:id" element={<ItemDetail />} />
        <Route path="achei" element={<RequireAuth><ReportFound /></RequireAuth>} />
        <Route path="perdi" element={<RequireAuth><ReportLost /></RequireAuth>} />
        <Route path="minha-conta" element={<RequireAuth><Account /></RequireAuth>} />
        <Route path="admin" element={<RequireAuth staff><Admin /></RequireAuth>} />
        <Route path="entrar" element={<Login />} />
        <Route path="cadastro" element={<SignUp />} />
        <Route path="recuperar-senha" element={<ForgotPassword />} />
        <Route path="redefinir-senha" element={<ResetPassword />} />
        <Route path="auth/callback" element={<AuthCallback />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
