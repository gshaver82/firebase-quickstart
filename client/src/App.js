import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import exampleHomePage from "./pages/exampleHomeFolder/exampleHomePage";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";

function App() {

    
    return (


        <AuthProvider>
            <Router>
                <Switch>
                    <PrivateRoute exact path="/exampleHomeFolder" component={exampleHomePage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;