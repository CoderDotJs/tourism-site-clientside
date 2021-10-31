import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "./firebase.initialization";

firebaseInitialization();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [status, setStatus] = useState("Pending")
   
    const handleStatusChange = (e) =>{
        console.log(e.target.value)
    }

    //google sign in witn popup

    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    //useing useEffect for on auth state change 

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user !== null){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);


    //log out function for sign in

    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
        .catch((err)=>{
            alert(err)
        })
    };

  return {
        googleSignIn,
        error, 
        setError, 
        auth, 
        user, 
        logOut,
        isLoading,
        setIsLoading,
        updateProfile, 
        status, 
        setStatus, 
        handleStatusChange
    }
}


export default useFirebase;