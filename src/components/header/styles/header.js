import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"


export const Background = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em 2.5em 2em;
    background: url(${({ src }) => src ? `${process.env.PUBLIC_URL}/images/misc/${src}.jpg` : `${process.env.PUBLIC_URL}/images/misc/home-bg.jpg`}) top left /cover no-repeat;

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
    grid-auto-flow: column;
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

export const Search = styled.div`
    display: none;

    @media (min-width: 800px) {
        display: flex;
        align-items: center;
    }
`

export const SearchIcon = styled.button`
    cursor: pointer;
    background: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 1em;
    }
`

export const SearchInput = styled.input`
    background: #44444459;
    color: white;
    height: 30px;
    
    margin-left: ${({ active }) => active ? "10px" : "0"};
    padding: ${({ active }) => active ? "0 10px" : "0"};
    border: ${({ active }) => active ? "1px solid white" : "0"};
    opacity: ${({ active }) => active ? "1" : "0"};
    width: ${({ active }) => active ? "200px" : "0"};
    transition: all 0.25s linear;
`

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 2em;
    height: 2em;
    cursor: pointer;
`

export const DropDown = styled.div`
    display: none;
    background: black;
    padding: 0.625em;
    width: 100px;
    position: absolute;
    top: 25px;
    right: 0px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }
    
    ${Group} {
        margin-bottom: 10px;
        
        &:last-of-type {
            margin-bottom: 0;
        }
        
        ${Link}, ${Picture} {
            cursor: default;
        }
    }
    
    button {
        margin-right: 10px;
    }
    
    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`

export const Profile = styled.div`
    position: relative;

    &:hover > ${DropDown} {
        display: grid;
    }
`