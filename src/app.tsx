import { RouterProvider } from 'react-router-dom'

import { AuthProvider } from '@/contexts'

import { ThemeProvider } from './components'
import { router } from './router'

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  )
}
