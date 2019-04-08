import React, { Component } from "react"

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
    }
  }

  render() {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Example label</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
            />
          </div>
        </form>
      </div>
    )
  }
}
