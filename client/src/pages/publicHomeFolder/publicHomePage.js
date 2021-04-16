import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import firebaseEnvConfigs from '../../firebase';
import AuthCard from "../../authComponents/AuthCard"
import { AuthContext } from "../../authComponents/Auth";

function PublicHomePage() {
    const app = firebaseEnvConfigs.firebase_;
    const { currentUser } = useContext(AuthContext);
    const [display, setDisplay] = useState(false);

    return (

        <div>
            <AuthCard>
                <section className="text-center">
                    <p className="divider font-script">Public Home page</p>
                </section>
                <section className="d-flex justify-content-center my-4">
                    {!!currentUser ? (
                        <>
                            <Link to="/ExampleHomePage" className="btn-secondary rb-btn mr-4">User Console</Link> 
                            <button className="rb-btn btn-info" onClick={() => app.auth().signOut()}>Sign Out</button>
                        </>
                        ) : (
                            <Link to="/login" className="btn-secondary rb-btn">Sign In</Link>
                        )}

                </section>
            </AuthCard>
        </div>
    );
}

export default PublicHomePage;
