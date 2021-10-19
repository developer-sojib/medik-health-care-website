import { useEffect, useState } from 'react';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';

firebaseInitialize()


//providers
const googleProvider = new GoogleAuthProvider();

const auth = getAuth();


const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [password, setPassword] = useState('')

    // google signIn
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // email sign In
    function signInWithEmail(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // set name and profile img url
    function setNameAndImage() {
        updateProfile(auth.currentUser, {
            displayName: { name },
            photoURL: { photo }
        }).then(() => {

        }).catch((error) => {
            setError(error.message)
        });
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

    // sign up
    function signUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setNameAndImage()
                alert("user's has been created")
            }).catch(error => {
                setError(error.message)
            })
    }

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
    // get email
    function getEmail(e) {
        setEmail(e?.target?.value)
    }
    // get name
    function getName(e) {
        setName(e?.target?.value)
    }
    // get password
    function getPassword(e) {
        setPassword(e?.target?.value)
    }
    // get photo
    function getPhoto(e) {
        setPhoto(e?.target?.value)
    }




    return {
        signInWithGoogle,
        user,
        error,
        signInWithEmail,
        getPassword,
        getEmail,
        logOut,
        signUp,
        getName,
        getPhoto,
    };
};

export default useFirebase;


