// can use multiple contexts, like MessageContext or PropertiesContext

'use client'

import {createContext, useContext, useState} from 'react';

// create context
const GlobalContext = createContext();

// create provider
export function GlobalProvider({children}){
    const [unreadCount, setUnreadCount] = useState(0);

    return (
        <GlobalContext.Provider value={{
            unreadCount,  // these objects will be shared with all pages
            setUnreadCount
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function usersGlobalContext(){
    return useContext(GlobalContext);
}