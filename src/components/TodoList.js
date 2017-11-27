import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

const TodoList = (props) => {
	return (
    <ListGroup>
      {props.tasks.map(item => {
        if (!item.complete) {
					return <ListGroupItem>{ item.task }</ListGroupItem>
        } else {
					return <ListGroupItem className="li-complete">{ item.task } <Badge color="success" pill>Done</Badge></ListGroupItem> 
        }
      })}
    </ListGroup>
	)
}

export default TodoList;