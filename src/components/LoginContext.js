import { createContext, useContext, useState } from "react";

const LoginContext = createContext()
const LoginProvider = ({children}) =>{
    const [login, setLogin] = useState("naologado")
    return(
        <LoginContext.Provider value={{
            login:login,
            setLogin: (name)=>setLogin(name)
        }}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => {
    return useContext(LoginContext)
}
export {LoginProvider, useLogin}