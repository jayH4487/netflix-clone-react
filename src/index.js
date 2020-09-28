import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { GlobalStyles } from "./global-styles"
import { FirebaseContext } from "./context/firebase"
import { config } from "./context/firebaseConfig"


const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
)