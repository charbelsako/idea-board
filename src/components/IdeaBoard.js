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
      displayForm: false,
      ideas: [object, ...this.state.ideas],
    }))
  }

  toggleForm = () => {
    this.setState(prevState => ({
      displayForm: !prevState.displayForm,
    }))
  }

  saveIdea = (new_object, index) => {
    // console.log(index)
    this.setState({
      ideas: this.state.ideas.map((val, i) => {
        if (index === i) {
          return { ...new_object }
        }
        return val
      }),
    })
  }

  hideForm = () => {
    this.setState({ displayForm: false })
  }

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
            <AddIdeaForm
              addIdea={this.addIdea}
              displayForm={this.state.displayForm}
              hideForm={this.hideForm}
            />
          ) : (
            ''
          )}
          {ideas.map((element, index) => (
            <Idea
              data={element}
              deleteIdea={this.deleteIdea}
              saveIdea={this.saveIdea}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    )
  }
}
