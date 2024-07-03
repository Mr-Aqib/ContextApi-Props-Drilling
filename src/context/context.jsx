import { Children, createContext, useState } from "react";
// Creating Context
export const Appcontext = createContext()
// Provider for App to access All
export const AppProvider = ({children}) =>
{
    const [ara,setAra]=useState("I am  state and i am from App")
    return (
        <Appcontext.Provider value={{
            setAra,
            ara
        }}>
            {children}
        </Appcontext.Provider>
)
}
