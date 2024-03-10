import {signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = ()=>{
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        

    }

    return(
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn;