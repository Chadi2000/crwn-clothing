import {signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = ()=>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(response)

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