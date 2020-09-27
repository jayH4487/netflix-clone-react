import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/home"
import * as ROUTES from "./constants/routes"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME}>
                    <Home />
                </Route>
                <Route path={ROUTES.SIGN_IN}>
                    <p>Sign in Page</p>
                </Route>
                <Route path={ROUTES.SIGN_UP}>
                    <p>Sign up Page</p>
                </Route>
                <Route path={ROUTES.BROWSE}>
                    <p>Browse Page</p>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
