import React, { Component } from "react";
import NewTodo from "./components/newTodo";
import DisplayList from "./components/list";
import DisplayOption from "./components/displayOption";
import "./styles/index.css";

class TodoList extends Component {
  state = {
    items: [],
    display: "all"
  };
  handleNew = inputText => {
    if (inputText.length !== 0) {
      const newItem = {
        text: inputText,
        key: Date.now(),
        completed: false
      };
      const items = [...this.state.items];
      items.push(newItem);
      this.setState({ items });
      console.log(items);
    }
  };

  handleDelete = item => {
    const items = this.state.items.filter(i => i.key !== item.key);
    this.setState({ items });
  };

  handleComplete = item => {
    if (!item.completed) {
      item.text = <strike>{item.text}</strike>;
      item.completed = !item.completed;
    }
    this.setState({ item });
  };

  handleFinished = () => {
    this.setState({ display: "finished" });
  };

  handleAll = () => {
    this.setState({ display: "all" });
  };

  handleActive = () => {
    this.setState({ display: "active" });
  };

  getTodoCount = items => {
    if (items.length === 0) return "You have nothing todo!";

    const finished = items.filter(i => i.completed === true);
    const pending = items.filter(i => i.completed === false);
    return `You have finished ${finished.length} tasks and have ${
      pending.length
    } to go`;
  };

  render() {
    const filtered =
      this.state.display === "finished"
        ? this.state.items.filter(i => i.completed === true)
        : this.state.display === "active"
          ? this.state.items.filter(i => i.completed === false)
          : this.state.items;

    return (
      <div id="todoListMain">
        <div className="todoHeader">
          <h1> Todo List </h1>
        </div>
        <DisplayOption
          onFinished={this.handleFinished}
          onAll={this.handleAll}
          onActive={this.handleActive}
        />
        <NewTodo onNew={this.handleNew} />
        <span className="todoCount">{this.getTodoCount(this.state.items)}</span>
        <DisplayList
          items={filtered}
          onDelete={this.handleDelete}
          onComplete={this.handleComplete}
        />
      </div>
    );
  }
}

export default TodoList;
