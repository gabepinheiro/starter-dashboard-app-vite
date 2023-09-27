import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { NProgressLoading, ThemeProvider } from '@/components'
import { AuthenticationPage, DashboardPage } from '@/pages'

export function Root() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Suspense fallback={<NProgressLoading />}>
        <Routes>
          <Route index path='/' element={<DashboardPage />} />
          <Route path='/auth' element={<AuthenticationPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}
