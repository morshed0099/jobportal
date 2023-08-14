

import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

export const userAuth = createContext()

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    
        const [user, setUseer] = useState(null)
        const [loading, setLoading] = useState(true)

    const createUserWithEmail = (email, passwod) => {
        return createUserWithEmailAndPassword(auth, email, passwod)
    }
    const loginUserWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password) }

    useEffect(() => {
      const subscrible=onAuthStateChanged(auth,(currentUser)=>{
        setUseer(currentUser)
        setLoading(false)
      }) 
      return ()=> subscrible()
    }, [auth])

    const userInfo = {
        setUseer,
        user,
        loading,
        setLoading,
        createUserWithEmail,
        loginUserWithEmail,
    }
    return (
        <div>
            <userAuth.Provider value={userInfo} >
                {children}
            </userAuth.Provider>
        </div>
    );
};

export default AuthProvider;