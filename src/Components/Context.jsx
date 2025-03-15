"use client";
import { createContext, useContext, useState } from "react"

export const SidebarContext = createContext();

export const SideBarProvider = ({children}) => {
    const [ isOpen , setOpen ] = useState(false);
    return (
        <SidebarContext.Provider value={{isOpen , setOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () =>{
    return useContext(SidebarContext);
}