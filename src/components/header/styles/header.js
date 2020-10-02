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

export const Group = styled.div`
    display: grid;
    grid-template-columns: auto repeat(2, 60px);
    align-items: center;
    gap: 2em;
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

export const Text = styled.p`
    color: white;
    font-size: 1.375rem;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const Link = styled.p`
    color: white;
    font-weight: ${({ active }) => active ? "bold" : "normal"};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`

export const Feature = styled(Container)`
    display: none;

    @media (min-width: 1100px) {
        display: grid;
        align-items: normal;
        width: 50%;
        padding: 150px 0 500px 0;
    }
`

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 3.125rem;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background: #e6e6e6;
    color: black;
    border-width: 0;
    padding: 0.625em 1.25em;
    border-radius: 5px;
    max-width: 130px;
    font-weight: bold;
    font-size: 1.25rem;
    margin-top: 0.625em;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover {
        background: #ff1e1e;
        color: white;
    }
`