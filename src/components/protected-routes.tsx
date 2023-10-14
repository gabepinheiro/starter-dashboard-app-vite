import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks'

import { Header } from './header'

export function ProtectedRoutes() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) return <Navigate to='/auth' replace />

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
