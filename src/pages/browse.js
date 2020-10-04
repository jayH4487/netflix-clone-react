import React, {useState} from "react"

import { BrowseContainer } from "../containers/browse"


export default function Browse() {

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <BrowseContainer />
        </>
    )
}