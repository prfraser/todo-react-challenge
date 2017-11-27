import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';

import toDos from './data';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

import TodoList from './components/TodoList.js'

const Heading = () => (
	<div className="heading">
		<h1>Todos List</h1>
		<hr/>
		<h2>Things to do:</h2>
	</div>
);

class App extends Component {
  render() {
    return (
    	<div>
    		<Heading />
	      <TodoList tasks={ toDos }/>
      </div>
    );
  }
}

export default App;
