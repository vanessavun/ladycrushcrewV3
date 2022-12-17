import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/category.types";

const firebaseConfig = {
  apiKey: "AIzaSyCio8-Xn1Bmb9uJs2eOaf-TkuiupphHiuU",
  authDomain: "crwn-clothing-db-93df5.firebaseapp.com",
  projectId: "crwn-clothing-db-93df5",
  storageBucket: "crwn-clothing-db-93df5.appspot.com",
  messagingSenderId: "680742435266",
  appId: "1:680742435266:web:a037e9081b3e009621fe5b",
};
const firebaseApp = initializeApp(firebaseConfig);

//GOOGLE PROVIDER WITH POPUP AND WITH REDIRECT
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore(firebaseApp);

//Firestore Database
export type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Batching done.");
};

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  );
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
    createdAt: Date;
    displayName: string;
    email: string;
}

//Create document in Firebase
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

//NON-GOOGLE PROVIDER: EMAIL AND PASSWORD
export const createAuthUserEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  //Firebase function gives us back authenticated user and an auth object
  return await createUserWithEmailAndPassword(auth, email, password);
};

//Sign in a user with an email and password
export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//Sign out
export const signOutUser = async () => signOut(auth);

//Firebase listener helper function
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => 
  onAuthStateChanged(auth, callback);

//Observable listener for signed in users to promise based function call
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
