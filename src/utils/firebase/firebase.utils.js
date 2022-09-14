import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCio8-Xn1Bmb9uJs2eOaf-TkuiupphHiuU",
    authDomain: "crwn-clothing-db-93df5.firebaseapp.com",
    projectId: "crwn-clothing-db-93df5",
    storageBucket: "crwn-clothing-db-93df5.appspot.com",
    messagingSenderId: "680742435266",
    appId: "1:680742435266:web:a037e9081b3e009621fe5b"
};
const firebaseApp = initializeApp(firebaseConfig);

//GOOGLE PROVIDER WITH POPUP AND WITH REDIRECT
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore(firebaseApp);

//Create document in Firebase
export const createUserDocumentFromAuth = async(userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}

//NON-GOOGLE PROVIDER: EMAIL AND PASSWORD
export const createAuthUserEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    //Firebase function gives us back authenticated user and an auth object
    return await createUserWithEmailAndPassword(auth, email, password);
}

//Sign in a user with an email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}