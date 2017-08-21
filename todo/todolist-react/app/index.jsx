import React from 'react'
import {render} from 'react-dom'
var TodoList = React.createClass({
    getInitialState: function() {
        return {lists: []}
    },
    addList: function(list) {
        if (this.state.lists.indexOf(list) == -1) {
            this.state.lists.push(list);
            this.setState({lists: this.state.lists});
        }
    },
    deleteList: function(index) {
        this.state.lists.splice(index, 1);
        this.setState({lists: this.state.lists});
    },
    render: function() {
        return (
            <div>
                <AddList addList={this.addList} />
                <DeleteList deleteList={this.deleteList} lists={this.state.lists} />
            </div>
        );
    }
});
var AddList = React.createClass({
    addList: function(e) {
        e.preventDefault();
        this.props.addList(this.refs.textInput.value);
        this.refs.textInput.value = "";
    },
    render: function() {
        return (
            <form onSubmit={this.addList}>
                <input type="text" placeholder="Please enter your todoList!" ref="textInput" autoComplete="off"/>
            </form>
        );
    }
});
var DeleteList = React.createClass({
    deleteList: function(e) {
        var index = e.target.getAttribute('id');
        this.props.deleteList(index);
    },
    render: function() {
        return (
            <ul>
                {
                    this.props.lists.map(function(list, index) {
                        return (
                            <li key={index}>
                                {list}
                                <button id={index} onClick={this.deleteList}>x</button>
                            </li>
                        );
                    }.bind(this))
                }
            </ul>
        );
    }
});
render(
    <TodoList />,
    document.getElementById("root")
);
//render(
 //   <h1>Hello, world!</h1>,
 //   document.getElementById('root')
//);