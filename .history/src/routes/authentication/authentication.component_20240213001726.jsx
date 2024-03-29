import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
        auth,
        signInWithGooglePopup,
        signInWithGoogleRedirect ,
        createUserDocumentFromAuth
    } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication  = () => {

    return(
        <div>
            <h1>Sing In Page</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;