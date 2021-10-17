import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';

firebaseInitialize()


//providers
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();


const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    // google signIn
    function signInWithGoogle() {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // get currently signed-In user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return () => unsubscribe;
    }, [])

    // sign Out
    function logOut() {
        signOut(auth)
            .then((result) => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            });
    }




    return {
        signInWithGoogle,
        user,
        error,
        logOut
    };
};

export default useFirebase;


