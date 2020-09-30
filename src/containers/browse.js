import React, { useState } from "react"

import { Header } from "../components"
import * as ROUTES from "../constants/routes"
import { FirebaseContext } from "../context/firebase"
import { SelectProfileContainer } from "./profiles"
import { FooterContainer } from "../containers/footer"

export function BrowseContainer() {

    const [profile, setProfile] = useState({})

    const user = {
        displayName: "user1",
        photoURL: "1"
    }

    return (
        profile.displayName
            ? <>
                <h1>browse container</h1>
                <FooterContainer />
            </>
            : <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}