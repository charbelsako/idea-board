import React, { Component } from "react"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter, Route } from "react-router-dom"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* AddIdeaForm */}
          {/* Idea Board to replace landing */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App
