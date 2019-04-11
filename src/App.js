import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route } from 'react-router-dom'
import IdeaBoard from './components/IdeaBoard'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faTrashAlt, faEdit)
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={IdeaBoard} />
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
