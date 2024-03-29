import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields ={
    displayName: '',
    email:'',
    password:'',
    confirmPassword: ''
}

const SignUpForm =() =>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(password != confirmPassword){
            alert("password do not match");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user,{ displayName });
            resetFormFields();


        }catch(error){
            if(error.code ==  'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            } else{
                console.log('user created encountered an error', error);
            }

        }
    }



    const handlechange = (event) =>{

        setFormFields({...formFields, [event.target.name]:event.target.value})
    }

    return (


        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput 
                label="Display Name" type="text" required onChange={handlechange}
                 name="displayName" value={displayName} />

                <FormInput
                  label="Email" type="email" required onChange={handlechange}
                  name="email" value={email} />

                <FormInput type="password" required onChange={handlechange}
                label="Password" name="password" value={password} />

                <FormInput type="password" required onChange={handlechange}
                 label="Confirm Password" name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;