import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    // account creation
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const handleGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // update profile
    const profileUpdate =(name,photo) => {
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }


    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            console.log("observer is:",currentUser);
        })
        return () => {
            return unSubscribe()
        }
    },[])

    const authData = {
        createUser,
        setUser,
        profileUpdate,
        loginUser,
        logOutUser,
        handleGoogle,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;