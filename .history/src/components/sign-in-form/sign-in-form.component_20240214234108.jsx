import { useState, useContext } from "react";
import { signInWithGooglePopup , createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";


const defaultFormFields ={
    email:'',
    password:'',
}

const SignInForm =() =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const { setCurrentUser } = useContext(UserContext);

    console.log(formFields);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () =>{
        const { user }= await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();


        try{
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            resetFormFields();
            //setCurrentUser(user);


        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break
                case 'auth/invalid-credential':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }

        }
    }



    const handlechange = (event) =>{

        setFormFields({...formFields, [event.target.name]:event.target.value})
    }

    return (


        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Email"
                inputOptions = {{
                    type:"email",
                    required:true,
                    onChange:handlechange,
                    name:"email",
                    value : email,
                    }}
                     />

                <FormInput
                label="Password"
                inputOptions = {{
                    type:"password",
                    required:true,
                    onChange:handlechange,
                    name:"password",
                    value : password,
                    }}
                     />


                    <div className="buttons-container">
                        <Button type="submit">Sign In</Button>
                        <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                            Google Sign In</Button>
                    </div>

                
            </form>
        </div>
    )
}

export default SignInForm;