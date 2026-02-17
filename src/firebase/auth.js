import { auth } from "./config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";

export const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
}
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const logout = async () => await signOut(auth);

export const onUserStateChange = (callback) => onAuthStateChanged(auth, callback);


