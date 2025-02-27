/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const userinfo = {
        user, setUser
    }
    return (
        <UserContext.Provider value={userinfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;