/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const Contexts = createContext();

const auth = getAuth(app);

const provider = new GoogleAuthProvider();


const Context = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const Google = () => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = () => {
        return signOut(auth);
    }
    const info = {
        user,
        loading,
        Google,
        createUser,
        loginUser,
        LogOut
    }



    return (
       <Contexts.Provider value={info}>
              {children}
       </Contexts.Provider>
    );
};

export default Context;