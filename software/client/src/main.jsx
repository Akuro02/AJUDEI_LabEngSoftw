import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')).render(<App />) 
// creates the root of the react application
// it is basically the entry point of the react app
// document.getElementById('root') gets the div with id 'root' from the index.html file
// .render(<App />) renders the App component inside the root div

// so whatever is in the div with id 'root' will be replaced by the App component

// the App component is the App.jsx file
