import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"


export const Background = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em 2.5em 2em;
    background: url(${({ src }) => src ? `/images/misc/${src}.jpg` : "/images/misc/home-bg.jpg"}) top left /cover no-repeat;

    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && "background: none"}
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    margin: 0 1.5em;
    padding: 1em 0;

    @media (min-width: 1000px) {
        margin: 0 3.5em;
    }
`

export const Logo = styled.img`
    height: 32px;
    width: 108px;

    @media (min-width: 1000px) {
        height: 45px;
        width: 167px;
    }
`

export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #e50914;
    color: white;
    border: 0;
    border-radius: 3px;
    padding: 0.5em 1em;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background: #f40612;
    }
`