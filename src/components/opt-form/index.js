import React from "react"

import { Container, Text, Input, Button, InputLabelWrapper, FloatingLabel } from "./styles/opt-form"


export default function OptForm({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

OptForm.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}

OptForm.InputLabelWrapper = function OptFormInputLabelWrapper({ children, ...restProps }) {
    return <InputLabelWrapper {...restProps}>{children}</InputLabelWrapper>
}

OptForm.Input = React.forwardRef(({ ...restProps }, ref) => {
    return <Input ref={ref} {...restProps} />
})

OptForm.FloatingLabel = function OptFormFloatingLabel({ children, ...restProps }) {
    return (
        <FloatingLabel {...restProps}>{children}</FloatingLabel>
    )
}

OptForm.Button = ({ children, ...restProps }) => {
    return (
        <Button {...restProps}>
            {children} <img src={`${process.env.PUBLIC_URL}/images/icons/chevron-right.png`} alt="try now" />
        </Button>
    )
}