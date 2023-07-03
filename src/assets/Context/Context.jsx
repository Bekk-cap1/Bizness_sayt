import { createContext, useState } from "react";


const Context = createContext()
function Provider ({children}){
    const [number, setNumber] = useState(0)
    const [page, setPage] = useState('')
    const [catal, setCatal] = useState({})
    const [seter, setSeter] = useState({})
    const [raqam, setRaqam] = useState({})
    return(
        <Context.Provider value={{number, setNumber,page, setPage, catal, setCatal, seter, setSeter, raqam, setRaqam}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}