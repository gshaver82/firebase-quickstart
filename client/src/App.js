import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import ExampleHomePage from "./pages/ExampleHomeFolder/ExampleHomePage";
import { AuthProvider } from "./authComponents/Auth";
import PrivateRoute from "./authComponents/PrivateRoute";
import secondPage from "./pages/secondFolder/secondPage";
import publicHomePage from "./pages/publicHomeFolder/publicHomePage";
import "./style.css";

function App() {


    return (


        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/publicHomePage" component={publicHomePage} />
                    <Route exact path="/secondFolder" component={secondPage} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/exampleHomeFolder" component={ExampleHomePage} />

                    <Route path="/" component={publicHomePage} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;