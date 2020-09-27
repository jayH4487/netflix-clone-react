import React from "react"

import Header from "../components/header"
import * as ROUTES from "../constants/routes"

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Container>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="netflix"/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Container>
            {children}
        </Header>
    )
}