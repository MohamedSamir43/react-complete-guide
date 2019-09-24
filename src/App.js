import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
	state = {
		persons: [
			{
				name: "Max",
				age: 28,
			},
			{
				name: "Manu",
				age: 29,
			},
			{
				name: "Stephanie",
				age: 26,
			},
		],
		otherState: "some other value",
		showPersons: false,
	};

	nameChangedHandler = event => {
		// console.log("Was clicked!");
		// this.state.persons[0].name = 'Maximilian' Dont change the state directly like this
		this.setState({
			persons: [
				{
					name: "Maximilian",
					age: 28,
				},
				{
					name: event.target.value,
					age: 29,
				},
				{
					name: "Stephanie",
					age: 27,
				},
			],
		});
	};

	deletePersonHandler = personIndex => {
		const persons = this.state.persons;
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};
	render() {
		const style = {
			backgroundColor: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer",
		};
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} />;
					})}
				</div>
			);
		}
		return (
			<div className='App'>
				<h1>Hi, i'm a react App</h1>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
		// return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi react app"));
	}
}

export default App;
