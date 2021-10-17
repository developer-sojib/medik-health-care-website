import React from 'react';
import useAuth from './../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <button onClick={signInWithGoogle}>Login with google</button>
        </div>
    );
};

export default Login;