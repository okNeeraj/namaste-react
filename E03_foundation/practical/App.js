import React from "react";
import ReactDOM from "react-dom/client";

// Component using arrow function
const App = () => {
	return (
		<div className="app">
			App Component
			{Heading()}
			<Heading />
			<Heading></Heading>
			<NormalFn />
			<Description />
		</div>
	);
};

// Component using normal function
function NormalFn() {
	return (
		<h3>Iam, Normal function component</h3>
	);
};

const Heading = () => <h1>Hey, Iam Heading Component</h1>;

const Description = () => (
	<p>Hey, Iam rendring from Description component.</p>
);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);
