import React, { useState, useRef, useEffect } from "react"
import { useHistory } from "react-router-dom"

import OptForm from "../components/opt-form"
import Feature from "../components/feature"
import { HeaderContainer } from "../containers/header"
import { JumbotronContainer } from "../containers/jumbotron"
import { FaqsContainer } from "../containers/faqs"
import { FooterContainer } from "../containers/footer"
import * as ROUTES from "../constants/routes"


export default function Home() {

    const [email, setEmail] = useState("")
    const [isLabelSmall, setIsLabelSmall] = useState(false)
    const inputRef = useRef()

    const history = useHistory()

    const handleClick = () => {
        history.push({
            pathname: ROUTES.SIGN_UP,
            state: email
        })
    }

    useEffect(() => {
        if (isLabelSmall) {
            inputRef.current.focus()
        }
    }, [isLabelSmall])

    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.InputLabelWrapper>
                            <OptForm.Input
                                ref={inputRef}
                                type="email"
                                value={email}
                                onFocus={() => setIsLabelSmall(true)}
                                onBlur={() => setIsLabelSmall(email === "" ? false : true)}
                                onChange={({ target }) => setEmail(target.value)}
                            />
                            <OptForm.FloatingLabel
                                onClick={() => setIsLabelSmall(true)}
                                isLabelSmall={isLabelSmall}
                            >
                                Email address
                            </OptForm.FloatingLabel>
                        </OptForm.InputLabelWrapper>
                        <OptForm.Button onClick={handleClick}>Let's go</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}