import React, { useContext } from 'react';
import './LogIn.css'
import logo from '../../logos/Group 1329.png'
import google from '../../logos/google.png'
import Container from 'react-bootstrap/Container'
import * as firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../App';
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const LogIn = () => {
const[signInUser,setSignInUser]=useContext(userContext);
    const history=useHistory();
    const location=useLocation()

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn=()=>{
      const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result=>{
            const user = result.user;
            const{displayName,email} = user;
            const userInfo={
                name:displayName,
                email:email,
               }
            setSignInUser(userInfo);
            history.replace(from);
           })
          .catch(error=>{
            console.log(error.code,error.message)
          });
    }
    return(
        <Container className="login-page text-center">
            <img className="logo" src={logo} alt=""/>
            <div className="sign-part">
                   <h2>Login With</h2>
               <div className="inside" onClick={handleGoogleSignIn}>
                    <img src={google} alt=""/>
                    <p>Continue with Google</p> 
               </div>
            </div>
        </Container>
    );
};
export default LogIn;
