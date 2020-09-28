import styled from "styled-components"

export const Container = styled.section`
    display: grid;
    justify-items: center;
    color: white;
    text-align: center;
    padding: 2em 0;
`

export const Title = styled.h1`
    font-size: 1.75rem;
    max-width: 640px;
    margin: 0;

    @media (min-width: 1000px) {
        font-size: 3.125rem;
    }
`

export const SubTitle = styled.p`
    font-size: 1.125rem;
    max-width: 640px;
    margin: 1em;

    @media (min-width: 1000px) {
        font-size: 1.625rem;
    }
`