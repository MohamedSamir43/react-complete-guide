import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi, i'm a react App</h1>
				<Person name="Max" age="28" />
				<Person name="Manu" age="29">
					My Hobbies: Racing
				</Person>
				<Person name="Stephanie" age="26" />
			</div>
		);
		// return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Hi react app"));
	}
}

export default App;
