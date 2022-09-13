import { createContext, useContext, useState } from "react";

const FarmContext = createContext()
const FarmProvider = ({children}) =>{
    const [farms, setFarms] = useState([])
    return(
        <FarmContext.Provider value={{
            farms,
            setFarms
        }}>
            {children}
        </FarmContext.Provider>
    )
}

const useFarms = () => {
    return useContext(FarmContext)
}
export {FarmProvider, useFarms}