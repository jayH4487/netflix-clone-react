import React from "react"

import OptForm from "../components/opt-form"
import Feature from "../components/feature"
import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { FaqsContainer } from "../containers/faqs"
import { HeaderContainer } from "../containers/header"

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                        <OptForm.Input placeholder="Email address" type="email"/>
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