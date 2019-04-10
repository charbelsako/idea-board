import React, { Component } from 'react'
import EditIdeaForm from './EditIdeaForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const styles = {
  divStyle: {
    // border: '1px solid black',
    width: '300px',
    height: '300px',
    marginBottom: '20px',
    marginTop: '20px',
  },
  deleteIcon: {
    fontSize: '24px',
  },
}
// try to use bootstrap cards
// This might have to be a stateful component for editing ideas
// const Idea = this.props => (
class Idea extends Component {
  state = {
    isEditing: false,
  }

  static getDerivedStateFromProps(props, state) {
    return {
      title: props.data.title,
      body: props.data.body,
      index: props.index,
    }
  }

  editIdea = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
    }))
  }

  saveIdea = (new_idea, index) => {
    this.props.saveIdea(new_idea, index)
    this.setState({ isEditing: false })
  }

  cancel = () => {
    this.setState({
      isEditing: false,
    })
  }

  render() {
    const { isEditing } = this.state
    if (isEditing) {
      return (
        <EditIdeaForm
          title={this.state.title}
          body={this.state.body}
          index={this.state.index}
          saveIdea={this.saveIdea}
          cancel={this.cancel}
        />
      )
    }
    return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div className="card" style={styles.divStyle}>
          <div className="card-header">
            <div className="row" style={{ marginTop: '10px' }}>
              <div className="col-8">
                <h4> {this.state.title}</h4>
              </div>
              <div className="col-2">
                <FontAwesomeIcon
                  icon="edit"
                  style={styles.deleteIcon}
                  className="editIcon"
                  // needs to be changed
                  onClick={() => this.editIdea(this.props.index)}
                />
              </div>
              <div className="col-2">
                <FontAwesomeIcon
                  icon="trash"
                  style={styles.deleteIcon}
                  className="deleteIcon"
                  onClick={this.props.deleteIdea(this.props.index)}
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <p>{this.props.data.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// )
export default Idea
