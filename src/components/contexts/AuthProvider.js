import { React, createContext } from 'react';
import useFirebase from './../hooks/useFirebase';


export const AuthContext = new createContext();


const AuthProvider = ({ children }) => {
    const AllLoginInfo = useFirebase();

    return (
        <AuthContext.Provider value={AllLoginInfo}>
            {children}
        </AuthContext.Provider>
    )


};

export default AuthProvider;