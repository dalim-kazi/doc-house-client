import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { app } from "../../../Firebase/Firebase.config";
import { toast } from "react-toastify";
const auth = getAuth(app)

export const createUser = createAsyncThunk("auth/createUser", async ({ email, password }) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        const userCredential = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            photoURL: user.photoURL
        }
        toast.success("Congratulation!!")
        return userCredential
    }
    catch (error) {
        toast.error(`${error.code}`)
        const message = error.message
        throw message
    }
})

export const signInUser = createAsyncThunk("auth/signInUser", async ({ email, password }) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        const user = res.user
        const userCredential = {
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            displayName: user.displayName,
            photoURL: user.photoURL
        }
        toast.success("congratulation!!")
        return userCredential
    } catch (error) {
        toast.error(`${error.code}`)
        throw error;
    }
})

export const logOutUser = createAsyncThunk("auth/logOutUser", async () => {
    try {
        await signOut(auth)
        return null
    } catch (error) {
        toast.error(`${error.code}`)
        throw error;
    }
})

export const updateProfileUser = createAsyncThunk("auth/updateProfile", async ({ name, photoUrl }) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error("User not authenticated");
        }
        if (!photoUrl) {
            throw new Error("Photo is not defined");
        }
        await updateProfile(user, { displayName: name, photoURL: photoUrl });
        const updatedUser = auth.currentUser;
        const userCredential = {
            uid: updatedUser.uid,
            email: updatedUser.email,
            emailVerified: updatedUser.emailVerified,
            displayName: updatedUser.displayName,
            photoURL: updatedUser.photoURL,
        };
        toast.success("Profile updated successfully");
        return userCredential;
    } catch (error) {
        toast.error(`Error updating profile: ${error.message}`);
        throw error;
    }
});