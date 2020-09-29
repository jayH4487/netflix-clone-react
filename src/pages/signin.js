import React, { useState } from "react"

import Form from "../components/form"
import * as ROUTES from "../constants/routes"
import { HeaderContainer, FooterContainer } from "../containers"

export default function Signin() {

    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isInputInvalid = (email, password) => email === "" || password === ""

    const handleSignin = (event) => {
        event.preventDefault()

    }

    return (
        <>
            <HeaderContainer showSigninLink={false}>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Button
                            disabled={isInputInvalid(email, password)}
                        >
                            Sign In
                        </Form.Button>
                        <Form.Text>
                            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}