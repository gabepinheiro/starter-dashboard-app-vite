import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { NProgressLoading } from '@/components'
import { AuthenticationPage, DashboardPage, TasksPage } from '@/pages'

import { ProtectedRoutes } from './components/protected-routes'

export function Root() {
  return (
    <Suspense fallback={<NProgressLoading />}>
      <Routes>
        {/* Start::PublicRoutes */}
        <Route path='/auth' element={<AuthenticationPage />} />
        {/* End::PublicRoutes */}

        {/* Start::ProtectedRoutes */}
        <Route element={<ProtectedRoutes />}>
          <Route index element={<DashboardPage />} />
          <Route path='/tasks' element={<TasksPage />} />
        </Route>
        {/* End::ProtectedRoutes */}
      </Routes>
    </Suspense>
  )
}
