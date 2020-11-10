import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* margin-top: 1em; */
    padding: 0 1em;
    height: 100%;

    @media (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        padding: 0;
    }
`

export const Text = styled.p`
    width: 100%;
    text-align: center;
    line-height: 1.3;
    color: white;

    @media (min-width: 600px) {
        font-size: 1.25rem;
    }
`

export const Wrapper = styled.div`
    position: relative;
`

export const Input = styled.input`
    color: black;
    max-width: 450px;
    width: 100%;
    border: 0;
    padding: 10px 10px 0;
    box-sizing: border-box;

    @media (min-width: 1000px) {
        font-size: 1.625rem;
        height: 70px;
    }

`

export const Label = styled.label`
    color: #8c8c8c;
    position: absolute;
    top: ${({ isLabelSmall }) => isLabelSmall ? "10%" : "50%"};
    left: 10px;
    transform: ${({ isLabelSmall }) => isLabelSmall ? "translateY(0%)" : "translateY(-50%)"};
    font-size: ${({ isLabelSmall }) => isLabelSmall ? "0.75em" : "1em"};
    font-weight: ${({ isLabelSmall }) => isLabelSmall ? "bold" : "normal"};
    transition: all 0.1s ease;

    &:hover {
        cursor: text;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    background: #e50914;
    color: white;
    padding: 1em 2.5em;
    margin-top: 1em;
    border: 0;
    cursor: pointer;
    
    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 1em;
        
        @media (min-width: 1000px) {
            width: 1.5em;
        }
    }

    &:hover {
        background: #f40612;
    }

    @media (min-width: 1000px) {
        font-size: 1.625rem;
        height: 70px;
        margin-top: 0
    }
`