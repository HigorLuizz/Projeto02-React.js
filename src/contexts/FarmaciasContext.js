import { createContext, useContext, useState } from "react";

const FarmContext = createContext()
const FarmProvider = ({children}) =>{
    const [farms, setFarms] = useState([{
        razao: "Clamed Farmácias",
        cnpj: "12.074.073/0001-07",
        nome: "Farmácia do Higor",
        email: "famaciadohigor@gmail.com",
        telefone: "47 3473-1259",
        celular: "47 999546978",
        cep: "89223-490",
        logradouro: "Rua dos Timbiras",
        numero: "154",
        bairro: "Jardim Sofia",
        localidade: "Joinville",
        uf: "SC",
        complemento: "Casa 01",
        latitude: -26.240327,
        longitude: -48.846791,
      }])
      console.log("context",farms)
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