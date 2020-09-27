import React from "react"

import { Container, Text, Input, Button } from "./styles/opt-form"


export default function OptForm({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

OptForm.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}

OptForm.Input = ({ ...restProps }) => {
    return <Input {...restProps} />
}

OptForm.Button = ({ children, ...restProps }) => {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="try now" />
        </Button>
    )
}