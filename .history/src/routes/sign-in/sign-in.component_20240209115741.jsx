import { auth,signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import creat

const SignIn = ()=>{
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        console.log(response);

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