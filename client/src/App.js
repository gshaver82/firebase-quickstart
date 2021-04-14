import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import exampleHomePage from "./pages/exampleHomeFolder/exampleHomePage";
import { AuthProvider } from "./component/Auth";
import PrivateRoute from "./component/PrivateRoute";
import secondPage from "./pages/secondFolder/secondPage";

function App() {


    return (


        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/secondFolder" component={secondPage} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/exampleHomeFolder" component={exampleHomePage} />

                    <Route exact path="/" component={Login} />
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;