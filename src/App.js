import React from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"

import { Home, Signin, Signup, Browse } from "./pages"
import * as ROUTES from "./constants/routes"
import { useAuthListener } from "./hooks"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"

function App() {

    const { user } = useAuthListener()

    return (
        <Router basename={ process.env.PUBLIC_URL }>
            <Switch>
                
                <IsUserRedirect
                    exact path={ROUTES.HOME}
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                >
                    <Home />
                </IsUserRedirect>
                
                <IsUserRedirect
                    path={ROUTES.SIGN_IN}
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                >
                    <Signin />
                </IsUserRedirect>
                
                <IsUserRedirect
                    path={ROUTES.SIGN_UP}
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                >
                    <Signup />
                </IsUserRedirect>
                
                <ProtectedRoute
                    path={ROUTES.BROWSE}
                    user={user}
                >
                    <Browse user={user}/>
                </ProtectedRoute>

            </Switch>
        </Router>
    )
}

export default App
