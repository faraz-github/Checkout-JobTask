import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}


export function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}