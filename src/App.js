import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Error from "./components/Error";
import Main from "./components/Main";
import Footer from "./components/Footer";
import BestSeller from "./components/BestSeller";

const App = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />
	},
	{
		path: 'best-seller',
		element: <BestSeller />
	}
])

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
