import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ThemeProvider } from './components'
import Dashboard from './pages/dashboard/dashboard'

export function Root() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index path='/' element={<Dashboard />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}
