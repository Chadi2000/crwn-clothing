import {initializeApp} from 'firebase/app';
import {
     getAuth,
     signInWithRedirect,
     signInWithPopup,
     GoogleAuthProvider
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
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () =>signInWithPopup(auth, provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth)=>{
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
                email
            })
        }catch{

        }
    }

    //if user data does not exist
    //create / set the document with the data from userAuth in my collection

    //if user data exist
    //return userDocRef
  }