import { useState } from 'react';
import { createAuthUserEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { SignUpContainer } from './sign-up-form.styles';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    //Generate user document inside of external service, triggers on Submit Handler
    const handleSubmit = async(event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Passwords do not match.');
            return;
        }
        //Create user
        try {
            const {user} = await createAuthUserEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(error){
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot created user. Email already in use.');
            } else {
                console.log("User creation encountered an error: ", error);
            }
            
        }
        
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name' 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName} />
                <FormInput 
                    label='Email' 
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email} />
                <FormInput 
                    label='Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password} />
                <FormInput 
                    label='Confirm password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;