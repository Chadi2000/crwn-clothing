import {initializeApp} from 'firebase/app';
import {
     getAuth,
     signInWithRedirect,
     signInWithPopup,
     GoogleAuthProvider,
     createUserWithEmailAndPassword
    } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}  from'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFm4naOY8EzymqmFzu3h2__lM1anMpCoU",
    authDomain: "crwn-clothing-db-ab0ad.firebaseapp.com",
    projectId: "crwn-clothing-db-ab0ad",
    storageBucket: "crwn-clothing-db-ab0ad.appspot.com",
    messagingSenderId: "89349111223",
    appId: "1:89349111223:web:714444d59a5d8bfdf53c32"
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>
   signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect =()=>
   signInWithRedirect(auth, googleProvider)

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth)=>{
    if(!userAuth) return ;
    const userDocRef = doc(db,'users',userAuth.uid )

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  };