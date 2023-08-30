import React from "react";
import ReactDOM from "react-dom";

/**
 * Add nested HTML
 */
const nested = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child1' }, [
		React.createElement('h1', {}, 'Hello, Iam H1 Tag Inside Child 1.'),
		React.createElement('h2', {}, 'Hello, Iam H2 Tag.')
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, 'Hello, Iam H1 Tag Inside Child 2.'),
		React.createElement('h2', {}, 'Hello, Iam H2 Tag Child 2.')
	])
])

const heading = (<div id="heading">Heading<div id="subHeading">Sub Heading</div></div>)
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(nested);
