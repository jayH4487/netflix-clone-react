import styled, { createGlobalStyle } from "styled-components"

export const LockBody = createGlobalStyle`
    body {
        overflow: hidden;
    }
`

export const ReleaseBody = createGlobalStyle`
    body {
        overflow: visible;
    }
`

export const Spinner = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: black;
    z-index: 999;

    :after {
        content: "";
        width: 150px;
        height: 150px;
        position: absolute;
        background-image: url(/images/misc/spinner.png);
        background-size: contain;
        background-repeat: no-repeat;
        top: 50%;
        left: 50%;
        animation-name: spin;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @keyframes spin {
        from {
            transform: translate(-50%, -50%) rotate(0deg);
        }

        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`

export const Picture = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`