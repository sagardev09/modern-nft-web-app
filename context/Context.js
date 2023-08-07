"use client"
import { useState, createContext, useContext } from "react";


const AuthContext = createContext()

export const UserAuthProvider = ({ children }) => {

    const [user, setuser] = useState(false)
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}