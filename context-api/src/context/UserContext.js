import {createContext, useState} from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser ] = useState({
        id:1,
        username : "furukderki",
        bio: "engineer"
    });
    const values = { user, setUser };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>

}

export default UserContext;