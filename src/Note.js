import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "jquery-ui";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

class Note extends Component {
  constructor() {
    super();
    this.state = { editing: false };
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }

  randomBetween(min, max) {
    return min + Math.ceil(Math.random() * max);
  }
  componentWillMount() {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150) + "px",
      top: this.randomBetween(0, window.innerHeight - 150) + "px",
      transform: "rotate(" + this.randomBetween(-15, 15) + "deg)",
    };
  }
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).draggable();
  }
  edit() {
    this.setState({ editing: true });
  }
  save() {
    this.props.onChange(this.refs.newText.value, this.props.index);
    this.setState({ editing: false });
  }
  remove() {
    this.props.onRemove(this.props.index);
  }
  displayDikhao() {
    return (
      <div className="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
          <button
            onClick={this.edit}
            className="btn btn-primary glyphicon glyphicon-pencil"
          />
          <button
            onClick={this.remove}
            className="btn btn-danger glyphicon glyphicon-trash"
          />
        </span>
      </div>
    );
  }
  formDikhao() {
    return (
      <div className="note" style={this.style}>
        <textarea
          ref="newText" //defaultValue={this.props.children}
          className="form-control"
        ></textarea>
        <button
          onClick={this.save}
          className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"
        />
      </div>
    );
  }
  render() {
    if (this.state.editing) {
      return this.formDikhao();
    } else {
      return this.displayDikhao();
    }
  }
}

export default Note;
