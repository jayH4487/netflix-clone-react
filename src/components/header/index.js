import React, { useState, useEffect } from "react"
import { Link as ReachRouterLink } from "react-router-dom"

import { Background,
    Container,
    Group,
    Logo,
    ButtonLink,
    Link,
    Text,
    Feature,
    FeatureCallOut,
    PlayButton,
    Search,
    SearchIcon,
    SearchInput,
    Profile,
    Picture,
    DropDown
} from "./styles/header"

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

Header.Group = ({ children, ...restProps }) => {
    return (
        <Group {...restProps}>{children}</Group>
    )
}

Header.Logo = ({ to, ...restProps }) => {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = ({ showSigninLink, children, ...restProps }) => {
    return (
        showSigninLink ? <ButtonLink {...restProps}>{children}</ButtonLink> : null
    )
}

Header.Link = ({ children, ...restProps }) => {
    return (
        <Link {...restProps}>{children}</Link>
    )
}

Header.Feature = ({ children, ...restProps }) => {
    return (
        <Feature {...restProps}>{children}</Feature>
    )
}

Header.FeatureCallOut = ({ children, ...restProps }) => {
    return (
        <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
    )
}

Header.Text = ({ children, ...restProps }) => {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Header.PlayButton = ({ children, ...restProps }) => {
    return (
        <PlayButton {...restProps}>{children}</PlayButton>
    )
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {

    const [searchActive, setSearchActive] = useState(false)

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    )
}

Header.Profile = ({ children, ...restProps }) => {
    return (
        <Profile {...restProps}>{children}</Profile>
    )
}

Header.Picture = ({ src, ...restProps }) => {
    return (
        <Picture {...restProps} src={`/images/users/${src}.png`} />
    )
}

Header.DropDown = ({ children, ...restProps }) => {
    return (
        <DropDown {...restProps}>{children}</DropDown>
    )
}