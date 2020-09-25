import React from "react"

import { Container, Links, Link, Title, Text } from "./styles/footer"

export default function Footer({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Footer.Links = ({ children, ...restProps }) => {
    return <Links {...restProps}>{children}</Links>
}

Footer.Link = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Footer.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}