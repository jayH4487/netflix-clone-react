import styled from "styled-components"

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (min-width: 1000px) {
        flex-direction: ${ ({direction})  => direction };
    }
`

export const Pane = styled.div`
    width: 100%;
    padding: 0 3em;
    text-align: center;

    @media (min-width: 1000px) {
        width: 50%;
        text-align: left;
    }
`

export const Item = styled.div`
    display: flex;
    color: white;
    padding: 2.25em 5%;
    border-bottom: 8px solid #222;
`

export const Container = styled.section`
    background: black;
`

export const Title = styled.h1`
    font-size: 2.25rem;
    line-height: 1.1;
    margin-bottom: 0.5em;

    @media (min-width: 600px) {
        font-size: 3.125rem;
    }
`

export const SubTitle = styled.h2`
    font-size: 1.125rem;
    font-weight: normal;
    line-height: normal;

    @media (min-width: 600px) {
        font-size: 1.625rem;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`