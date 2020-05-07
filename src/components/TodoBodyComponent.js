import React, { Component } from 'react';
import TodoList from './TodoListComponent';
import { Button, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class TodoBody extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: 0,
            sortAlph: false,
            todoList: [],
            newText: '' 
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleSortAlph = this.handleSortAlph.bind(this);
        this.handleSortCreat = this.handleSortCreat.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleTextChange(event) {
        this.setState({
            newText: event.target.value
        });
    }

    handleAddClick() {
        const timestamp = Date.now();
        const newKey = this.state.key + 1;
        this.setState({
            todoList: [...this.state.todoList].concat({
                key: this.state.key,
                text: this.state.newText,
                time: timestamp
             }),
            newText: '',
            key: newKey
        });
    }

    handleSortAlph() {
        this.setState({
            sortAlph: true
        });
    }

    handleSortCreat() {
        this.setState({
            sortAlph: false
        });
    }

    handleDelete(e) {
        var arr = this.state.todoList;
        const rmKey = e.target.id;
        this.setState({
            todoList: arr.filter((item) => item.key != rmKey)
        });
    }

    render() {
        return (
            <Container>
                <Row className="row justify-content-around">
                    <Button color="primary" onClick={this.handleSortAlph} >Sort Alphabetically</Button>
                    <Button color="warning" onClick={this.handleSortCreat} >Sort By Creation</Button>
                </Row>
                <br />
                <div name="noteslist" >
                    <TodoList alpha={this.state.sortAlph} list={this.state.todoList} handle={this.handleDelete} />
                    <Row className="justify-content-center">
                        <Col sm="10">
                            <Input type="text" placeholder="Type here to add..."
                                value={this.state.newText} onChange={ this.handleTextChange }/>
                        </Col>
                        <Col sm="auto">
                            <Button color="success" onClick={this.handleAddClick}>Add</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
  }

  export default TodoBody;