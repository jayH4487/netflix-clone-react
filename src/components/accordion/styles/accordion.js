import styled from "styled-components"

export const Container = styled.section`
    border-bottom: 8px solid #222;
`

export const Inner = styled.div`
    max-width: 815px;
    margin: 0 auto;
    padding: 4.5em 0;

    @media (min-width: 550px) {
        width: 90%
    }

    @media (min-width: 950px) {
        width: 100%
    }
`

export const Item = styled.div`
    margin-bottom: 0.5em;
`

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    line-height: 1.4;
    color: white;
    margin-top: 0;
    margin-bottom: 1em;

    @media (min-width: 600px) {
        font-size: 3rem;
    }
`

export const Header = styled.div`
    color: white;
    background: #303030;
    padding: 0.8em 2.2em;
    margin-bottom: 1px;
    cursor: pointer;
    user-select: none;
`

export const Body = styled.div`
    display: ${({active}) => active ? "block" : "none"};
    line-height: 1.4;
    color: white;
    background: #303030;
    padding: 0.8em 2.2em;
    user-select: none;
`