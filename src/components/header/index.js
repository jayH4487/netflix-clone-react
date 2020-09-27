import React from "react"
import { Link as ReachRouterLink } from "react-router-dom"

import { Background, Container, Logo, ButtonLink } from "./styles/header"


export default function Header({ bg=true, children, ...restProps }) {
    return (
        bg ? <Background {...restProps}>{children}</Background> : children
    )
}

Header.Container = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Logo = ({ to, ...restProps }) => {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = ({ children, ...restProps }) => {
    return (
        <ButtonLink {...restProps}>{children}</ButtonLink>
    )
}