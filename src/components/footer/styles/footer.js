import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    max-width: 900px;
    padding: 3em 2em;
    margin: 0 auto;
`
export const Title = styled.p`
    color: #757575;
    font-size: 1rem;
    margin-bottom: 2.5em;
`

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(177px, 1fr));
    gap: 1em;
    margin-bottom: 2.5em;
`

export const Link = styled.a`
    font-size: 0.75rem;
    color: #757575;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`

export const Text = styled.p`
    font-size: 0.75rem;
    color: #757575;
`