import React from "react";
import firebaseEnvConfigs from '../../firebase';

function ExampleHomePage() {


    return (
        <>
            <h3>
                You are now logged in!
        </h3>
            <button type="button" onClick={() => firebaseEnvConfigs.auth().signOut()}>
                Logout
    </button>
        </>
    );
}

export default ExampleHomePage;