/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import authContext from "./AuthContext";
import auth from "../config/firebase.config";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const userSignOut = () => {
        setLoading(true)
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("Current User", currentUser);
            setLoading(false)
        })
        return unsubscribe
    }, [user])

    const authData = {
        user, setUser,
        googleSignIn, userSignOut
    }

    return (
        <authContext.Provider value={authData}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;