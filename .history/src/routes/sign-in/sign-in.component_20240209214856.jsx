import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
        auth,
        signInWithGooglePopup,
        signInWithGoogleRedirect ,
        createUserDocumentFromAuth
    } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    useEffect(() => {
        // Define an asynchronous function inside useEffect
        const fetchData = async () => {
          try {
            // You can await here
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user)
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        // Call the asynchronous function immediately
        fetchData();
      
        // Specify dependencies if needed (empty array if not)
      }, []); // Add dependencies if needed
      

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    

   
    

    return(
        <div>
            <h1>Sing In Page</h1>
            {/* <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button> */}
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;