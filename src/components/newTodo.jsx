import React, { Component } from "react";
import "../styles/index.css";

class NewTodo extends Component {
  render() {
    const { onNew } = this.props;
    let _inputElement;
    return (
      <div className="todoNew">
        <input
          className="inputText"
          type="text"
          placeholder="What do you need todo?"
          ref={a => (_inputElement = a)}
        />
        <button
          className="inputButton"
          type="button"
          onClick={() => {
            onNew(_inputElement.value);
            _inputElement.value = "";
          }}
        >
          Add{" "}
        </button>
      </div>
    );
  }
}

export default NewTodo;
