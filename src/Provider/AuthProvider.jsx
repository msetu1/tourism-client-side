import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    // create register 
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword( auth,email,password)
    }


    // login 
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // log out 
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);

    const info={
        user,
        loading,
        createUser,
        signIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;