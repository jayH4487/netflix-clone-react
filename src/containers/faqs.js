import React from "react"

import { Accordion, OptForm} from "../components"
import faqsData from "../fixtures/faqs.json"


export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(faq => (
                <Accordion.Item key={faq.id}>
                    <Accordion.Header id={faq.id}>{faq.header}</Accordion.Header>
                    <Accordion.Body id={faq.id}>{faq.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Input placeholder="Email address" type="email"/>
                <OptForm.Button>Get Started</OptForm.Button>
            </OptForm>
        </Accordion>
    )
}