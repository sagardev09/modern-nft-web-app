"use client"
import { useState, createContext, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/utils/Firebaseconfig";
import { doc, setDoc } from "firebase/firestore";


const AuthContext = createContext()

export const UserAuthProvider = ({ children }) => {



    const [isloading, setisloading] = useState(true)

    const router = useRouter()

    const [user, setuser] = useState(null)

    const login = async (userdetail) => {
        try {
            await signInWithEmailAndPassword(auth, userdetail.email, userdetail.password).then((userCred) => {
                if (userCred) {
                    console.log(userCred);
                    setuser(userCred)
                    console.log();
                    router.push("/")
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const signin = async ({ email, password, isSignUp }) => {
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            if (userCred) {
                await setDoc(doc(db, "users", userCred.user.uid), {
                    email: userCred.user.email,
                    displayName: userCred.user.displayName,
                    phoneNumber: userCred.user.phoneNumber,
                    photoURL: userCred.user.photoURL,
                    providerId: userCred.user.providerId,
                    uid: userCred.user.uid
                });

                console.log("User data stored in Firestore");
                setuser(null)
            }
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut()
            router.push("/login")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userCred) => {
            if (userCred) {
                setuser(userCred);
                setisloading(false);
            } else {
                setuser(null);
                setisloading(false);
                router.push('/login');
            }
        });

        return () => unsubscribe();
    }, [router]);


    // if (isloading) {
    //     <div>loading......</div>
    //     return null;
    // }


    return (
        <AuthContext.Provider value={{ user, login, signin, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(AuthContext)
}