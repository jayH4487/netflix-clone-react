import React from "react"

import { Container, Title, List, User, Picture, Name } from "./styles/profiles"


export default function Profiles({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Profiles.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = ({ children, ...restProps }) => {
    return <List {...restProps}>{children}</List>
}

Profiles.User = ({ children, ...restProps }) => {
    return <User {...restProps}>{children}</User>
}

Profiles.Picture = ({ src, ...restProps }) => {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} />
}

Profiles.Name = ({ children, ...restProps }) => {
    return <Name {...restProps}>{children}</Name>
}
