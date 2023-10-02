import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { NProgressLoading } from '@/components'
import { AuthenticationPage, DashboardPage } from '@/pages'

import { ProtectedRoutes } from './components/protected-routes'
import { Dashboard2 } from './pages/dashboard/dashboard2'

export function Root() {
  return (
    <Suspense fallback={<NProgressLoading />}>
      <Routes>
        {/* Start::PublicRoutes */}
        <Route path='/auth' element={<AuthenticationPage />} />
        {/* End::PublicRoutes */}

        {/* Start::ProtectedRoutes */}
        <Route element={<ProtectedRoutes />}>
          <Route index element={<Dashboard2 />} />
        </Route>
        {/* End::ProtectedRoutes */}
      </Routes>
    </Suspense>
  )
}
