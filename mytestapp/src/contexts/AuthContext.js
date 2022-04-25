import React, { useContext, useState, useEffect } from 'react'
//import { auth } from "../firebase"

import { getAuth } from "firebase/auth"
import firebaseapp from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    
    const auth = getAuth()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function logout() {
      return auth.signOut();
  }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [] )

    const value = { 
        currentUser,
        signup,
        logout
    }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

