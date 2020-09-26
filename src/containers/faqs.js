import React from "react"

import Accordion from "../components/accordion"
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
        </Accordion>
    )
}