import React, { Component } from 'react'

const styles = {
  divStyle: {
    width: '300px',
    height: '300px',
    marginBottom: '20px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  submitBtn: {
    marginTop: '5px',
  },
}

export default class EditIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      body: this.props.body,
      index: this.props.index,
    }
  }

  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       title: props.title,
  //       body: props.body,
  //     }
  //   }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  editIdea = e => {
    e.preventDefault()
    const { title, body } = this.state
    const new_idea = { title, body }
    this.props.saveIdea(new_idea, this.state.index)
  }

  cancel = e => {
    e.preventDefault()
    this.props.cancel()
  }

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <form onSubmit={this.editIdea}>
          <div className="card" style={styles.divStyle}>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      autoFocus={this.props.displayForm}
                      aria-describedby="title"
                      placeholder="Enter title"
                      onChange={this.onChange}
                      defaultValue={this.state.title}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <textarea
                  className="form-control"
                  name="body"
                  id="body"
                  cols="30"
                  rows="6"
                  onChange={this.onChange}
                  defaultValue={this.state.body}
                />
              </div>
              <div className="row" style={styles.submitBtn}>
                <div className="col-6 col-md-6">
                  <input type="submit" value="Edit" className="btn btn-success" />
                </div>
                <div className="col-6 col-md-6">
                  <button className="btn btn-danger" onClick={this.cancel}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
