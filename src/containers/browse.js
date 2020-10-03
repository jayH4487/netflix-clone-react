import React, { useContext, useState, useEffect } from "react"

import { Header, Loading } from "../components"
import * as ROUTES from "../constants/routes"
import { FirebaseContext } from "../context/firebase"
import { SelectProfileContainer } from "./profiles"
import { FooterContainer } from "../containers/footer"

export function BrowseContainer() {

    const [profile, setProfile] = useState({})
    const [category, setCategory] = useState("series")
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")

    const { firebase } = useContext(FirebaseContext)

    const user = {
        displayName: "user1",
        photoURL: "1"
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [user])

    return (
        profile.displayName
        // user.displayName
            ? <>
                {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
                <Header src="joker1" dontShowOnSmallViewPort>
                    <Header.Container>

                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="netflix"/>
                            <Header.Link
                                active={category === "series"}
                                onClick={() => setCategory("series")}
                            >
                                Series
                            </Header.Link>
                            <Header.Link
                                active={category === "films"}
                                onClick={() => setCategory("films")}
                            >
                                Films
                            </Header.Link>
                        </Header.Group>

                        <Header.Group>

                            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                            <Header.Profile>
                                <Header.Picture src={user.photoURL}/>
                                <Header.DropDown>
                                    <Header.Group>
                                        <Header.Picture src={user.photoURL} />
                                        <Header.Link>{user.displayName}</Header.Link>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.Link onClick={() => firebase.auth().signOut}>Sign out</Header.Link>
                                    </Header.Group>
                                </Header.DropDown>
                            </Header.Profile>

                        </Header.Group>

                    </Header.Container>

                    <Header.Feature>
                        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                        <Header.Text>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
                        </Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header>
                <FooterContainer />
            </>
            : <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}