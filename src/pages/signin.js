import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"

import Form from "../components/form"
import * as ROUTES from "../constants/routes"
import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import { FirebaseContext } from "../context/firebase"


export default function Signin() {

    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()

    const isInputInvalid = email === "" || password === ""

    const handleSignin = (event) => {
        event.preventDefault();

        (async () => {
            try {
                const success = await firebase.auth().signInWithEmailAndPassword(email, password)
                
                history.push(ROUTES.BROWSE)
                
            } catch (error) {
                setEmail("")
                setPassword("")
                setError(error.message)
            }
        })()
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
                            disabled={isInputInvalid}
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