import React from "react";
import ButtonItem from "./deleteTodo";
import "../styles/index.css";

const DisplayList = props => {
  const { items, onDelete, onComplete } = props;
  return (
    <ol className="listItems">
      {items.map(item => (
        <div className="itemElements">
          <li className="listItem" key={item.key}>
            {item.text}
          </li>
          <ButtonItem item={item} onDelete={onDelete} onComplete={onComplete} />
        </div>
      ))}
    </ol>
  );
};

export default DisplayList;
