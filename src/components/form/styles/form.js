import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"


export const Container = styled.section`
    display: grid;
    grid-template-rows: min-content;
    align-items: start;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    max-width: 450px;
    min-height: 660px;
    margin: 0 auto 4em;
    padding: 3.75em 4.25em 2.5em;
`

export const Base = styled.form`
    display: grid;
`

export const Title = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.75em;
`

export const Input = styled.input`
    background: #333;
    border: 0;
    border-radius: 4px;
    color: white;
    padding: 0.4em 1em;
    height: 3.125em;
    margin-bottom: 1em;

    &:last-of-type {
        margin-bottom: 2em;
    }
`

export const Button = styled.button`
    background: #e50914;
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    font-weight:bold;
    margin-bottom: 1em;
    padding: 1em;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`

export const Text = styled.p`
    color: #737373;
`

export const TextSmall = styled.p`
    font-size: 0.8rem;
    line-height: normal;
    color: #8c8c8c;
`

export const Error = styled.p`
    background: #e87c03;
    border-radius: 4px;
    font-size: 0.875rem;
    margin: 0 0 1em;
    color: white;
    padding: 1em 1.25em;
`

export const Link = styled(ReachRouterLink)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`