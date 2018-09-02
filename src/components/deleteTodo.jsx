import React, { Component } from "react";
import deleteButton from "../images/deleteButton.png";
import greenCheck from "../images/greenCheck.png";
import "../styles/index.css";

class DeleteTodo extends Component {
  render() {
    const { item, items, onDelete, onComplete } = this.props;
    console.log("SDF", items);
    return (
      <div className="btnItem">
        <button className="btnComplete" onClick={() => onComplete(item)}>
          <img src={greenCheck} alt="" />
        </button>
        <button className="btnDelete" onClick={() => onDelete(item)}>
          <img src={deleteButton} alt="" />
        </button>
      </div>
    );
  }
}

export default DeleteTodo;
