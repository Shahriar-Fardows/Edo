/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {   GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

export const Contexts = createContext();

const auth = getAuth(app);


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

     const provider  = new GoogleAuthProvider();

    const google = () =>{
        return signInWithPopup(auth , provider);
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
        google,
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