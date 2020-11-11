import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"

import { HeaderContainer } from "../containers/header"
import { FooterContainer } from "../containers/footer"
import Form from "../components/form"
import * as ROUTES from "../constants/routes"
import { FirebaseContext } from '../context/firebase'

export default function Signup({ location }) {

    const [error, setError] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState(location.state || "")
    const [password, setPassword] = useState("")

    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()

    const isInputInvalid = firstName === "" || email === "" || password === ""

    const handleSignup = (event) => {
        event.preventDefault();

        (async () => {
            try {
                const currentUser = await firebase.auth().createUserWithEmailAndPassword(email, password)

                const success = await currentUser.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.ceil(Math.random() * 5)
                })

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
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeLabel="First Name"
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeLabel="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        <Form.Input
                            placeLabel="Password"
                            type="password"
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Button
                            disabled={isInputInvalid}
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