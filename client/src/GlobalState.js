import React, { createContext, useState, useEffect } from "react";


import ListsAPI from "./api/ListsAPI";
import MoviesAPI from "./api/MoviesAPI";
export const GlobalState = createContext()
export const DataProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState('')

    useEffect(() => {
        const userLocal = JSON.parse(localStorage.getItem('user'))
        if (userLocal) {
            setUser(userLocal)
            setToken(userLocal.accessToken)
        }
        setTimeout(() => {
            localStorage.removeItem('user')

        }, 1000 * 60 * 60 * 24 * 10);
    }, [user.accessToken,user.username,user.email,user.password])
    const state = {
        user: [user, setUser],
        listsAPI: ListsAPI(token),
        moviesAPI: MoviesAPI(token)
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}