import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleprovider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    // Create google login 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleprovider)
    }
    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // SignIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SignOut

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // UpdateUser Photo Url and Name 

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    // Outside API ke hit korbe ei jonno useEffect use korte hobe

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // JWT API Post
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    }

                    )
            }
            else {
                // TODO: remove token(if token stored in client site: local storage caching, in memory)
                localStorage.removeItem('access-token');
            }
            console.log('current user', currentUser)
            setLoading(false)
        });
        return () => {
            return unsubscribe();
        }

    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;