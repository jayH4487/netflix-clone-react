import React, { useContext, useState, useEffect } from "react"
import Fuse from "fuse.js"

import { Header, Loading, Card, Player } from "../components"
import * as ROUTES from "../constants/routes"
import { FirebaseContext } from "../context/firebase"
import { SelectProfileContainer } from "./profiles"
import { FooterContainer } from "../containers/footer"


export function BrowseContainer({ user, slides }) {

    const [profile, setProfile] = useState({})
    const [category, setCategory] = useState("series")
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [slideRows, setSlideRows] = useState([])

    const { firebase } = useContext(FirebaseContext)
    
    useEffect(() => {
        if (profile.displayName !== undefined) {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    }, [profile])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])

    useEffect(() => {
        const fuse = new Fuse(slideRows, { keys: ["data.description", "data.title", "data.genre"] })
        const results = fuse.search(searchTerm).map(({ item }) => item)

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRows(results)
        } else {
            setSlideRows(slides[category])
        }
        
    }, [searchTerm])
    

    return (
        profile.displayName
            ? <>
                {loading ? <Loading src={profile.photoURL} /> : <Loading.ReleaseBody />}
                <Header src="joker1" dontShowOnSmallViewPort>
                    <Header.Container>

                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME} src={`${process.env.PUBLIC_URL}/images/misc/logo.svg`} alt="netflix"/>
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
                                        <Header.Link onClick={() => firebase.auth().signOut()}>Sign out</Header.Link>
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
                        {/* <Header.PlayButton>Play</Header.PlayButton> */}
                        <Player>
                            <Player.Button />
                            <Player.Video />
                        </Player>
                    </Header.Feature>
                </Header>

                <Card.Group>
                    {slideRows.map(slideItem => (
                        <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                            <Card.Title>{slideItem.title}</Card.Title>
                            <Card.Entities>
                                <Card.EntityButton
                                    direction="left"
                                    noOfItems={slideItem.data.length}
                                    >
                                    {"\u2039"}
                                </Card.EntityButton>
                                {slideItem.data.map(item => (
                                    <Card.Item
                                        key={item.docId}
                                        genre={slideItem.title}
                                        item={item}
                                    >
                                        <Card.Image src={`${process.env.PUBLIC_URL}/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                ))}
                                <Card.EntityButton
                                    direction="right"
                                    noOfItems={slideItem.data.length}
                                >
                                    {"\u203a"}
                                </Card.EntityButton>
                            </Card.Entities>

                            <Card.Feature category={category} genre={slideItem.title}>
                                <Player>
                                    <Player.Button />
                                    <Player.Video />
                                </Player>
                            </Card.Feature>

                        </Card>
                    ))}
                </Card.Group>
                

                <FooterContainer />
            </>
            : <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}