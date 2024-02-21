import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react'

    const AuthContext = createContext();

    const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null);
        const [anchorElUser, setAnchorElUser] = useState(null);

        const login = async(email, password) => {
            try {
                const auth = getAuth();
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                setUser(userCredential.user);
                return userCredential.user;
            } catch(error) {
                console.error('Login error', error);
                throw error;
            }
        };

        const logout = async() => {
            try {
                const auth = getAuth();
                await signOut(auth);
                setUser(null);
                setAnchorElUser(null);
            } catch(error) {
                console.error('Logout error', error);
            }
        };

        useEffect(() => {
            const auth = getAuth();
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user);
            });
            return unsubscribe();
        }, []);

        const handleOpenUserMenu = (event) => {
            setAnchorElUser(event.currentTarget);
        };
    
        const handleCloseUserMenu = () => {
            setAnchorElUser(null);
        };

        const authContextValue = {
            user,
            login,
            logout,
            isLoggedIn: !!user,
            anchorElUser,
            handleOpenUserMenu,
            handleCloseUserMenu,
        };

        return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
    };

    export { AuthContext, AuthProvider };