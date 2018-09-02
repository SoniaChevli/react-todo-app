import React, { Component } from "react";
import "../styles/index.css";

class DisplayOption extends Component {
  render() {
    const { onAll, onFinished, onActive } = this.props;
    return (
      <div className="btnOptions">
        <button className="btnOption" onClick={() => onAll()}>
          {" "}
          ALL{" "}
        </button>
        <button className="btnOption" onClick={() => onFinished()}>
          {" "}
          COMPLETED{" "}
        </button>
        <button className="btnOption" onClick={() => onActive()}>
          {" "}
          ACTIVE{" "}
        </button>
      </div>
    );
  }
}

export default DisplayOption;
