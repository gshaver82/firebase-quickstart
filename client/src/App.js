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
                    
                    <Route exact path="/secondPage" component={secondPage} />
                    <Route exact path="/Login" component={Login} />
                    <PrivateRoute exact path="/ExampleHomePage" component={ExampleHomePage} />
                    <Route path="/publicHomePage" component={publicHomePage} />
                    <Route path="/" component={publicHomePage} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;