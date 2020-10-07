import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

import { Container, Overlay, Inner, Button, Close } from "./styles/player"


export const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {

    const [showPLayer, setShowPlayer] = useState(false)

    return (
        <PlayerContext.Provider value={{ showPLayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayVideo({ ...restProps }) {

    const { showPLayer, setShowPlayer } = useContext(PlayerContext)

    return showPLayer
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
                <Inner>
                    <video id="netflix-player" controls>
                        <source src="/videos/bunny.mp4" type="video/mp4" />
                    </video>
                    <Close onClick={() => setShowPlayer(false)} />
                </Inner>
            </Overlay>,
            document.body
        ) : null
}

Player.Button = function PlayerButton({ ...restProps }) {
    
    const { showPLayer, setShowPlayer } = useContext(PlayerContext)

    return <Button onClick={() => setShowPlayer(!showPLayer)} {...restProps}>Play</Button>
}