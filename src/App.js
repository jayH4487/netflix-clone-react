import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <p>netflix app</p>
                </Route>
                <Route path="/signin">
                    <p>Sign in Page</p>
                </Route>
                <Route path="/signup">
                    <p>Sign up Page</p>
                </Route>
                <Route path="/browse">
                    <p>Browse Page</p>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
