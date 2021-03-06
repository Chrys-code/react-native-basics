import React, { useState } from 'react'
import { AsyncStorage } from 'react-native'

type User = null | { username: string }


export const AuthContext = React.createContext<{
    user: User,
    login: () => void,
    logout: () => void
}>({
    user: null,
    login: () => { },
    logout: () => { }
})


interface AuthProviderProps {

}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>(null)
    return (
        <AuthContext.Provider value={{
            user,
            login: () => {
                const fakeuser = { username: 'bob' }
                setUser(fakeuser)
                AsyncStorage.setItem('user', JSON.stringify(fakeuser))
            },
            logout: () => {
                setUser(null)
                AsyncStorage.removeItem('user')
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}