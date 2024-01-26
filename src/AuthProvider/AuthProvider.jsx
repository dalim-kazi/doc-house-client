import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { app } from "../Firebase/Firebase.config";
import { setError, setLoading, setUser } from "../Feature/Reducer/AuthSlice";
import axios from "axios";
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            dispatch(setLoading(true))
            try {
                if (currentUser) {
                    const userCredential = {
                        uid: currentUser.uid,
                        email: currentUser.email,
                        displayName: currentUser.displayName,
                        emailVerified: currentUser.emailVerified,
                        photoURL: currentUser.photoURL
                    }
                    await dispatch(setUser(userCredential))
                    axios.post("https://doc-house-server-iota.vercel.app/user/jwt", {
                        email:currentUser.email
                    })
                        .then(data => {
                            const token = data.data.token 
                            localStorage.setItem("docToken",token)
                        })
                    dispatch(setLoading(false))
                }
                else {
                    await dispatch(setUser(null))
                    localStorage.removeItem("docToken")
                    dispatch(setLoading(false))
                }
            } catch (error) {
                await dispatch(setError(error.message))
                dispatch(setLoading(false))
            }
        })
        return () => unSubscribe()
    }, [dispatch])


    return children
};

export default AuthProvider;