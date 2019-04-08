import React, { Component } from 'react'
import Idea from './IdeaElement'
import AddIdeaForm from './AddIdeaForm'

export default class IdeaBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: [
        {
          title: 'first idea',
          body: 'this idea is very special',
        },
      ],
      displayForm: false,
    }
  }

  deleteIdea = key => () => {
    this.state.ideas.splice(key, 1)
    this.setState({
      ideas: [...this.state.ideas],
    })
  }

  addIdea = object => {
    this.setState(prevState => ({
      displayForm: !prevState.displayForm,
      ideas: [object, ...this.state.ideas],
    }))
  }

  toggleForm = () => {
    this.setState(prevState => ({
      displayForm: !prevState.displayForm,
    }))
  }

  // will require a rewrite for the AddIdeaForm.js component to use state
  editIdea = () => {}

  render() {
    const { ideas, displayForm } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <button className="btn btn-primary" onClick={this.toggleForm}>
              Add new idea
            </button>
          </div>
        </div>

        <div className="row">
          {displayForm ? (
            <AddIdeaForm addIdea={this.addIdea} displayForm={this.state.displayForm} />
          ) : (
            ''
          )}
          {ideas.map((element, index) => (
            <Idea
              data={element}
              deleteIdea={this.deleteIdea}
              editIdea={this.editIdea}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    )
  }
}
