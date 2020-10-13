import React, { useState, useContext, createContext } from "react"

import {
    Container,
    Group,
    Title,
    Entities,
    EntityButton,
    Item,
    Image,
    Meta,
    SubTitle,
    Text,
    Feature,
    Content,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
} from "./styles/card"


const FeatureContext = createContext()


export default function Card({ children, ...restProps }) {

    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState(false)

    return (
        <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = ({ children, ...restProps }) => {
    return <Group {...restProps}>{children}</Group>
}

Card.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

const EntityContext = createContext()

Card.Entities = function CardEntities({ children, ...restProps }) {

    const [offset, setOffset] = useState(0)

    return (
        <EntityContext.Provider value={{ offset, setOffset }}>
            <Entities {...restProps}>{children}</Entities>
        </EntityContext.Provider>
    )
}

Card.EntityButton = function CardEntityButton({ direction, noOfItems, children, ...restProps }) {

    const { offset, setOffset } = useContext(EntityContext)

    return (
        <EntityButton
            onClick={() => setOffset(prev => prev + (direction === "right" ? -1 : 1))}
            disabled={offset > -1 && direction === "left" || offset < -noOfItems + 2 && direction === "right"}
            direction={direction}
            {...restProps}
        >
            {children}
        </EntityButton>
    )
}

Card.Item = function CardItem({ item, children, ...restProps }) {

    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    const { offset } = useContext(EntityContext)

    return (
        <Item
            onClick={() => {
                setItemFeature(item)
                setShowFeature(true)
            }}
            offset={offset}
            {...restProps}
        >
            {children}
        </Item>
    )
}

Card.Image = ({ ...restProps }) => {
    return <Image {...restProps} />
}

Card.Meta = ({ children, ...restProps }) => {
    return <Meta {...restProps}>{children}</Meta>
}

Card.SubTitle = ({ children, ...restProps }) => {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = ({ children, ...restProps }) => {
    return <Text {...restProps}>{children}</Text>
}

Card.Feature = function CardFeature({ category, children, ...restProps }) {

    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)

    return showFeature
        ? (
            <Feature
                src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
                {...restProps}>
                <Content>
                    <FeatureTitle>{itemFeature.title}</FeatureTitle>
                    <FeatureText>{itemFeature.description}</FeatureText>
                    <FeatureClose onClick={() => {setShowFeature(false)}}>
                        <img src="/images/icons/close.png" alt="close" />
                    </FeatureClose>

                    <Group margin="30px 0" flexDirection="row" alignItems="center">
                        <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}</Maturity>
                        <FeatureText fontWeight="bold">
                            {itemFeature.genre.charAt().toUpperCase() + itemFeature.genre.slice(1)}
                        </FeatureText>
                    </Group>
                    {children}
                </Content>
            </Feature>
        )
        : null
}

