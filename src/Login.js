import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import image from './image/facebook.jpg'
import facebooklogo from './image/facebookNewImage.png'
import {auth, provider} from './firebase'

function Login() {
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => alert(error.message));

    }
    return (
        <div className="login">
            <div className="login__logo">
            <img src={image}
            alt=""
            />
            <img src={facebooklogo}
            alt=""
            />
            <button className="login__button" type="submit" onClick={signIn}>
            signIn
            </button>
            </div>         
        </div>
    )
}

export default Login
