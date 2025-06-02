import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    cont [token, setToken] = useState(12344567890);

    return(
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}