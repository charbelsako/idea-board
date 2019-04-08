import React from 'react'
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
const Idea = props => (
  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <div className="card" style={styles.divStyle}>
      <div className="card-header">
        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-8">
            <h4>{props.data.title}</h4>
          </div>
          <div className="col-2">
            <FontAwesomeIcon
              icon="edit"
              style={styles.deleteIcon}
              className="editIcon"
              // needs to be changed
              onClick={props.editIdea(props.index)}
            />
          </div>
          <div className="col-2">
            <FontAwesomeIcon
              icon="trash"
              style={styles.deleteIcon}
              className="deleteIcon"
              onClick={props.deleteIdea(props.index)}
            />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <p>{props.data.body}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Idea
