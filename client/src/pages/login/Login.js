import React, { useState, useContext } from "react";
import firebaseEnvConfigs from '../../firebase';
import AuthCard from "../../component/AuthCard"
import SignUpForm from "../../component/SignUpForm"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './firebaseui-styling.css';
import { AuthContext } from "../../component/Auth";

function Login({history}) {
    // This is some crazy bullshit and I have no idea why it's not working correctly. v
    const firebase = firebaseEnvConfigs.firebase_;
    const [userCred, setUserCred] = useState({});
    const { currentUser } = useContext(AuthContext);
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserCred({ ...userCred, [name]: value })
    };

    const authenticateUser = async (event) => {
        event.preventDefault();
        try {
            if (event.target.name === "signin") {
                await firebaseEnvConfigs.auth().signInWithEmailAndPassword(userCred.email, userCred.password);
            } else if (event.target.name === "signup") {
                await firebaseEnvConfigs.auth().createUserWithEmailAndPassword(userCred.email, userCred.password);
            } else {
                return;
            }
            history.push("/exampleHomeFolder");
        } catch (error) {
            alert(error);
        }
    }

    // Warning: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
    // in Login (created by Context.Consumer)
    // in Route (at App.js:22)
    // in Switch (at App.js:17)
    // in Router (created by BrowserRouter)
    // in BrowserRouter (at App.js:16)
    // in AuthProvider (at App.js:15)
    // in App (at src/index.js:9)
    // in StrictMode (at src/index.js:8)

    // suggested fix, remove the if statement to outside and have the render results below
    // if one thing, render x else render y

    return (
        <AuthCard>
            {currentUser ? (
                history.push("/exampleHomeFolder")
            ) : (
                <>
                    <SignUpForm 
                        handleInputChange={handleInputChange}
                        submitSignin={authenticateUser}
                        submitSignup={authenticateUser}
                    />
                    <h1 className="divider font-book-italic">Or</h1>
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebaseEnvConfigs.auth()}
                    />
                </>
            )}
        </AuthCard>
    );
}

export default Login;