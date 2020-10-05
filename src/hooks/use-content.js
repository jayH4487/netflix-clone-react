import { useState, useContext, useEffect } from "react"

import { FirebaseContext } from "../context/firebase"


export default function useContent(target) {
    
    const [content, setContent] = useState([])
    const { firebase } = useContext(FirebaseContext)

    const db = firebase.firestore()

    useEffect(() => {
        (async (target) => {
            try {
                const querySnapshot = await db.collection(target).get()
                const allContent = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    docId: doc.id
                }))
                setContent(allContent)
            } catch (error) {
                console.log(error)
            }
        })(target)
    }, [])

    return {[target]: content}

}