import React from 'react'
import "./App.scss"

import webfontloader from "webfontloader"
import Router from './router/Router'

document.title = "Deflicks"

function App() {
  webfontloader.load({google: {families: ["Montserrat"]}})
  
  return (
    <div className="App">
      <Router/>
    </div>
  )
}

export default App