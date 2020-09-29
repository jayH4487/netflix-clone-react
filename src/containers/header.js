import React from "react"

import { Header } from "../components"
import * as ROUTES from "../constants/routes"

export default function HeaderContainer({ showSigninLink=true, children }) {
    return (
        <Header>
            <Header.Container>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="netflix"/>
                <Header.ButtonLink to={ROUTES.SIGN_IN} showSigninLink={showSigninLink}>Sign In</Header.ButtonLink>
            </Header.Container>
            {children}
        </Header>
    )
}