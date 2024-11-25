import React, { createContext, useState } from 'react';
import isAdmin from '../utils/isAdminLoggedin';

// Create a Context
export const AdminContext = createContext();

export const AdminContextProvieder=({children})=>{
    const [token,setToken]=useState(isAdmin());
    // const [adminEmail,setAdminEmail]=useState
    return (
        <AdminContext.Provider value={{token,setToken}}>
            {children}
        </AdminContext.Provider>
      );
} 


