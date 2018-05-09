import React, { Component } from 'react';
import Note from './Note';
import css from './style.css'

class Board extends Component {
 
  componentWillMount()
  {
    this.setState({cheezein:[]});
  }

    nextId() 
    {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }
    add = (text) => {
        var arr = this.state.cheezein;
        arr.push({id: this.nextId(), note:text});
        this.setState({cheezein: arr});
    }
    update = (newText, i) => {
        var arr = this.state.cheezein;
        arr[i].note = newText;
        this.setState({cheezein:arr});
    }
    remove = (i) => {
        var arr = this.state.cheezein;
        arr.splice(i, 1);
        this.setState({cheezein:arr});
    }
    eachNote = (note, i) => {
        return (
        <Note key={note.id}
        index={i}
        onChange={this.update}
        onRemove={this.remove}
        >{note.note}</Note>);
    }
    render(){
        return (<div className="board"> {this.state.cheezein.map(this.eachNote)}
        <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null, "Enter text here")}/>
         </div>
         );
        }
  }

export default Board;
