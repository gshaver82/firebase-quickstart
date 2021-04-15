import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import exampleHomePage from "./pages/exampleHomeFolder/exampleHomePage";
import { AuthProvider } from "./authComponents/Auth";
import PrivateRoute from "./authComponents/PrivateRoute";
import secondPage from "./pages/secondFolder/secondPage";
import Splash from "./pages/splash/Splash";

function App() {


    return (


        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/secondFolder" component={secondPage} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/exampleHomeFolder" component={exampleHomePage} />

                    <Route exact path="/" component={Splash} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;