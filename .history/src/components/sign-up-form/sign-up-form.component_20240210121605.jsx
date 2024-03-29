import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

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

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(password != confirmPassword){
            alert("password do not match");
            return;
        }

        try{
            const response = await createAuthUserWithEmailAndPassword(email, password);
            console.log(response);
        }catch(error){
            console.log('user created encountered an error', error)
        }
    }



    const handlechange = (event) =>{

        setFormFields({...formFields, [event.target.name]:event.target.value})
    }

    return (


        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handlechange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" required onChange={handlechange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handlechange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handlechange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;