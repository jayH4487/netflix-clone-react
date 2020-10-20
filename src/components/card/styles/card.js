import styled from "styled-components"


export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 3.125em;
    position: relative;
`

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection === "row" ? "row" : "column"};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};
`

export const Title = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1em;
    margin: 0 3.5em 0.5em;
    color: #e5e5e5;
`

export const Entities = styled.div`
    margin: 0 1.875em;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    overflow-x: hidden;

    @media (min-width: 1000px) {
        margin: 0 3.125em;
    }
`

export const EntityButton = styled.button`
    box-sizing: border-box;
    font-size: 1.5rem;
    font-weight: bold;
    display: grid;
    align-content: end;
    padding: 0;
    color: ${({ disabled }) => disabled ? "transparent" : "white"};
    background: ${({ disabled }) => disabled ? "transparent" : "black"};
    cursor: ${({ disabled }) => disabled ? "default" : "pointer"};
    border: 0;
    border-radius: 50%;
    box-shadow: 0px 0px 5px 1px rgba(255,255,255,0.3);
    box-shadow: ${({ disabled }) => disabled ? "none" : "0px 0px 5px 1px rgba(255,255,255,0.3)"};
    width: 1em;
    height: 1em;
    position: absolute;
    top: calc(30px + 42px - 12px);
    ${({ direction }) => `${direction}: 0.7em`};
    z-index: 1;

    &:focus {
        outline: 0;
    }

    @media (min-width: 1000px) {
        font-size: 2rem;
        ${({ direction }) => `${direction}: 1em`};
        top: calc(30px + 70px - 16px);
    }
`

export const Image = styled.img`
    border: 0;
    width: 150px;
    height: auto;
    padding: 0;
    margin: 0;
    cursor: pointer;

    @media (min-width: 1000px) {
        width: 250px;
    }

`

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 0.625em;
    background: #0000008f;
`

export const SubTitle = styled.p`
    font-size: 0.75rem;
    font-weight: bold;
    color: white;
    margin: 0;
    user-select: none;
    display: none;
`

export const Text = styled.p`
    font-size: 0.625rem;
    line-height: normal;
    color: white;
    margin: 0.5em 0 0;
    user-select: none;
    display: none;
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    transform: translateX(${({ offset }) => `${offset}00%`});
    transition: transform 0.2s;

    /* &:hover {
        transform: scale(1.3);
        z-index: 99;
    } */

    @media (min-width: 1000px) {
        &:hover ${Meta},
        &:hover ${SubTitle},
        &:hover ${Text} {
            display: block;
            z-index: 100;
        }
    }

`

export const Content = styled.div`
    margin: 1.875em 0;
    max-width: 67%;
    line-height: normal;

    @media (min-width: 1000px) {
        margin: 3.5em 0;
    }
`

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`

export const FeatureText = styled.p`
    font-size: 0.875rem;
    font-weight: ${({ fontWeight }) => fontWeight === "bold" ? "bold" : "normal"};
    line-height: 22px;
    color: white;
    margin: 0;
    

    @media (min-width: 800px) {
        line-height: normal;
    }
`

export const Feature = styled.div`
    margin: 0 1.875em;
    display: flex;
    flex-direction: row;
    position: relative;
    height: auto;
    background-color: black;
    background: url(${({ src }) => src});
    background-size: contain;
    background-position-x: right;
    background-repeat: no-repeat;
    

    @media (min-width: 1000px) {
        margin: 0 3.125em;
        height: 360px;
        background-size: contain;

        ${Title} {
            font-size: 1.5rem;
        }

        ${FeatureText} {
            font-size: 1.125rem;
        }
    }
`

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 2em;
    }
`

export const Maturity = styled.div`
    font-size: 0.75rem;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    color: white;
    background: ${({ rating }) => rating >= 15 ? "red" : "green"};
    border-radius: 50%;
    padding: 0.5em;
    margin-right: 10px;
`

