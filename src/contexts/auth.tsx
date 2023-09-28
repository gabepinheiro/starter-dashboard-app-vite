import { createContext, ReactNode, useCallback, useState } from 'react'

export type User = {
  username?: string
  email?: string
}

export type AuthContextProps = {
  user: User | null
  isAuthenticated: boolean
  login: (props: { user: User } & { token: string }) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextProps | null>(null)

export type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const hasToken = !!localStorage.getItem('@dashboard:token')

  const [user, setUser] = useState<AuthContextProps['user']>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(hasToken)

  const login: AuthContextProps['login'] = useCallback(({ user, token }) => {
    setUser(user)
    setIsAuthenticated(true)

    localStorage.setItem('@dashboard:token', token)
  }, [])

  const logout: AuthContextProps['logout'] = useCallback(() => {
    localStorage.removeItem('@dashboard:token')
    setUser(null)
    setIsAuthenticated(false)
  }, [])

  const value = { user, isAuthenticated, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
