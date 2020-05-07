import React from 'react';
import TodoBody from './TodoBodyComponent';
import { Container, Row, Col } from 'reactstrap';

function Main() {
    return (
        <Container>
            <h1>Todo List</h1>
            <Row>
                <Col sm="2"></Col>
                <Col sm="8">
                    <TodoBody />
                </Col>
                <Col sm="2"></Col>
            </Row>
        </Container>
    );
  }

  export default Main;