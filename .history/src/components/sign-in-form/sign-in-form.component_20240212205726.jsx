import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields ={
    email:'',
    password:'',
}

const SignInForm =() =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    console.log(formFields);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();


        try{
            
            resetFormFields();


        }catch(error){
            
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




                <Button type="submit">Sign In</Button>
            </form>
        </div>
    )
}

export default SignInForm;