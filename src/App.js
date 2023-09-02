import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);
