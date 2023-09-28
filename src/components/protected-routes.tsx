import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks'

export function ProtectedRoutes() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate to='/auth' replace />
}
