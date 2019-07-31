import React,{useState} from 'react';
import RegForm from '../RegForm';
import LoginForm from './LoginForm'


export default function Auth(props) {
    const [isSignin, SetSignin]=useState(false)

    const handleSignUpButtonClick = ()=> {
        SetSignin(false) 
    }
    const handleSignInButtonClick = ()=> {
        SetSignin(true) 
    }

    return (
      <div>
        {!isSignin && <RegForm props={props} />}
        {isSignin && <LoginForm props={props} />}
        <button onClick={handleSignInButtonClick}> Sign in</button>
        <button onClick={handleSignUpButtonClick}>Sign up</button>
      </div>
    );
}