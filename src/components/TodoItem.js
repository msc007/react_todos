//rce + tab to create blue print (react extension).
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}
//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
