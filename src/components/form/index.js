import React from "react"

import { 
    Container, 
    Base, 
    Title, 
    Input, 
    Button, 
    Text, 
    TextSmall, 
    Error, 
    Link 
} from "./styles/form"


export default function Form({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Form.Base = ({ children, ...restProps }) => {
    return (
        <Base {...restProps}>{children}</Base>
    )
}

Form.Title = ({ children, ...restProps }) => {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Form.Input = (props) => {
    return (
        <Input {...props} />
    )
}

Form.Button = ({ children, ...restPros }) => {
    return (
        <Button {...restPros}>{children}</Button>
    )
}

Form.Text = ({ children, ...restProps }) => {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Form.TextSmall = ({ children, ...restProps }) => {
    return (
        <TextSmall {...restProps}>{children}</TextSmall>
    )
}

Form.Error = ({ children, ...restProps }) => {
    return (
        <Error {...restProps}>{children}</Error>
    )
}

Form.Link = ({ children, ...restProps }) => {
    return (
        <Link {...restProps}>{children}</Link>
    )
}