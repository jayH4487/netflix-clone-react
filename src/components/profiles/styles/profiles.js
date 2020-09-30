import styled from "styled-components"

export const Container = styled.div`
    padding: 0 2em;
    display: grid;
`

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: normal;
    color: white;
    text-align: center;
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const Name = styled.p`
    color: #808080;
    text-overflow: ellipsis;
`

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;

    &:hover {
        border: 3px solid white;
    }
`

export const User = styled.li`
    max-height: 200px;
    list-style-type: none;
    text-align: center;
`