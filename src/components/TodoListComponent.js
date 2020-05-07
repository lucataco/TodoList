import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

function TodoList(props) {
    return (
        <div className="container">
            <ListGroup>
                {props.alpha && props.list
                    .sort((a,b) => (a.text > b.text) ? 1 : -1)
                    .map((item) => {
                        return (
                            <ListGroupItem className="row justify-content-between">
                                <Button id={item.key} onClick={props.handle}>X</Button>
                                {item.text}
                            </ListGroupItem>
                        );
                    })
                }
                {!props.alpha && props.list
                    .sort((a,b) => (a.time > b.time) ? 1 : -1)
                    .map((item) => {
                        return (
                            <ListGroupItem className="row justify-content-between">
                                <Button id={item.key} onClick={props.handle}>X</Button>
                                {item.text}
                            </ListGroupItem>
                        );
                    })
                }
            </ListGroup>
        </div>
    );
  }

  export default TodoList;