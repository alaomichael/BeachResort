import React from "react"
import "./App.css"
// Page Imports
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"
//Components Import
import Navbar from "./components/Navbar"

import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Switch onUpdate={() => window.scrollTo(0, 0)}>
        <Route exact path="/BeachResort" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:id" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
