import React, { useState, useRef, useEffect } from "react"

import OptForm from "../components/opt-form"
import Feature from "../components/feature"
import { HeaderContainer } from "../containers/header"
import { JumbotronContainer } from "../containers/jumbotron"
import { FaqsContainer } from "../containers/faqs"
import { FooterContainer } from "../containers/footer"


export default function Home() {

    const [email, setEmail] = useState("")
    const [isLabelSmall, setIsLabelSmall] = useState(false)
    const inputRef = useRef()

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
                        <OptForm.Button>Get Started</OptForm.Button>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}