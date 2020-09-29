import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/home"
import Signin from "./pages/signin"
import Signup from "./pages/signup"
import * as ROUTES from "./constants/routes"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME}>
                    <Home />
                </Route>
                <Route path={ROUTES.SIGN_IN}>
                    <Signin />
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <Signup />
                </Route>
                <Route path={ROUTES.BROWSE}>
                    <p>Browse Page</p>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
