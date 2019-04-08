import React, { Component } from 'react'

const styles = {
  divStyle: {
    width: '300px',
    height: '300px',
    marginBottom: '20px',
    marginTop: '20px',
  },
  submitBtn: {
    marginTop: '5px',
  },
}

export default class AddIdeaForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  addIdea = e => {
    e.preventDefault()
    const { title, body } = this.state
    const new_idea = { title, body }
    this.props.addIdea(new_idea)
  }

  render() {
    return (
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <form onSubmit={this.addIdea}>
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
                      value={this.state.title}
                      placeholder="Enter title"
                      onChange={this.onChange}
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
                  value={this.state.body}
                  onChange={this.onChange}
                />
              </div>
              <div className="row" style={styles.submitBtn}>
                <div className="col-6 col-md-6">
                  <input type="submit" value="Add" className="btn btn-success" />
                </div>
                <div className="col-6 col-md-6">
                  <button className="btn btn-danger">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
