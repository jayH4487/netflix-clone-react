import React, { useState } from "react"

import { HeaderContainer, FooterContainer } from "../containers"
import Form from "../components/form"
import * as ROUTES from "../constants/routes"

export default function Signup() {

    const [error, setError] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isInputInvalid = (email, password) => firstName === "" || email === "" || password === ""

    const handleSignup = (event) => {
        event.preventDefault()

    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={({ target }) => setEmail(target.value)}
                        />
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
                            Sign Up
                        </Form.Button>
                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign In now.</Form.Link>
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