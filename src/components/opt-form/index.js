import React, { useState, useRef, useEffect } from "react"

import { Container, Text, Input, Button, Wrapper, Label } from "./styles/opt-form"


export default function OptForm({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

OptForm.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}

OptForm.Input = function OptFormInput({ placeLabel, ...restProps }) {
    
    const [isLabelSmall, setIsLabelSmall] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        if (isLabelSmall) {
            inputRef.current.focus()
        }
    }, [isLabelSmall])

    return (
        <Wrapper>
            <Input
                ref={inputRef}
                onFocus={() => setIsLabelSmall(true)}
                onBlur={() => setIsLabelSmall(false)}
                {...restProps}
            />
            <Label
                onClick={() => setIsLabelSmall(true)}
                isLabelSmall={isLabelSmall}
            >
                {placeLabel}
            </Label>
        </Wrapper>
        )
}

OptForm.Button = ({ children, ...restProps }) => {
    return (
        <Button {...restProps}>
            {children} <img src={`${process.env.PUBLIC_URL}/images/icons/chevron-right.png`} alt="try now" />
        </Button>
    )
}