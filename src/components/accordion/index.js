import React, { useState, createContext, useContext } from "react"

import { Container, Inner, Title, Header, Body, Item } from "./styles/accordion"


const activeItemContext = createContext()

export default function Accordion({ children, ...restProps }) {

    const [activeItem, setActiveItem] = useState(-1)

    return (
        <activeItemContext.Provider value={ {activeItem, setActiveItem} }>
            <Container {...restProps}>
                <Inner>{children}</Inner>
            </Container>
        </activeItemContext.Provider>
    )
}

Accordion.Item = ({ children, ...restProps }) => {
    return (
        <Item {...restProps}>{children}</Item>
    )
}

Accordion.Title = ({ children, ...restProps }) => {
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Accordion.Header = function AccordionHeader({ children, id, ...restProps }) {

    const {activeItem, setActiveItem} = useContext(activeItemContext)
    
    return (
        <Header
            {...restProps}
            onClick={() => setActiveItem(activeItem === id ? -1 : id)}
        >
            {children}
            {activeItem === id
                ? <img src="/images/icons/close-slim.png" alt="close" />
                : <img src="/images/icons/add.png" alt="open" />
            }
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, id, ...restProps }) {

    const {activeItem} = useContext(activeItemContext)
    const isActive = activeItem === id

    return (
        isActive
        ? <Body {...restProps} isActive="isActive">{children}</Body>
        : null
    )
}
