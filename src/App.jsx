import React, { Component } from "react";
import Griddle, { RowDefinition, ColumnDefinition } from "griddle-react";
import { fakeData } from "./components/testComponent";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1>The App Griddle</h1>
				<Griddle
					data={fakeData}
					pageProperties={{
						currentPage: 1,
						pageCount: 10,
						recordCount: 2,
					}}
				>
					<RowDefinition>
						<ColumnDefinition id="name" title="Name" />
						<ColumnDefinition
							id="state"
							title="Location"
							order={1}
							width={400}
						/>
						<ColumnDefinition
							id="company"
							title="Compagny"
							order={1}
							width={300}
						/>
						<ColumnDefinition
							id="country"
							title="country"
							order={1}
							width={300}
						/>
					</RowDefinition>
				</Griddle>
			</div>
		);
	}
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
