import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import exampleHomePage from "./pages/exampleHomeFolder/exampleHomePage";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";
import Gene from "./pages/gene/Gene";

function App() {


    return (


        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/gene" component={Gene} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/exampleHomeFolder" component={exampleHomePage} />

                    <Route exact path="/" component={Login} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;