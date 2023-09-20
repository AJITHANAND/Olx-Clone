import { useEffect, useState } from 'react';
import { createContext } from "react";
export const AuthContext =  createContext(null);

export default function Context({children}){
    const [user, setUser] = useState(null);
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(user));
    },[user])
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider> 
    )
}