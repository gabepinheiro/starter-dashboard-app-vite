import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from './pages/dashboard/dashboard'

export function Root() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route index path='/' element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
}
