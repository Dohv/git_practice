import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div>
        <p>This is the {this.props.match.params.todo}.</p>
      </div>
    );
  };
}

export default Todo;