import styled from "styled-components"


export const Container = styled.div`

`

export const Overlay = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    padding: 0 20px;
`

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {

        width: 100%;
        height: 100%;
    }
`

export const Button = styled.button`
    font-size: 1.125rem;
    text-transform: uppercase;
    font-weight: bold;
    background: #e50914;
    border-color: #ff0a16;
    border-radius: 5px;
    padding: 0.5em 1.25em;
    color: white;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`

export const Close = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 22px;
    height: 22px;
    opacity: 0.3;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &:before,
    &:after {
        content: "";
        position: absolute;
        left: 10px;
        top: 0;
        height: 22px;
        width: 2px;
        background: #333;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`