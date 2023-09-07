import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import {
	Home,
	BestSeller,
	Electronics,
	ProductDetail,
	Error,
	ProductList,
	UserClass,
} from './components/pages';

const App = () => {
	return (
		<>
			<Header />
			<main className="page-container">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: 'best-seller',
				element: <BestSeller />
			},
			{
				path: 'product',
				element: <ProductList />
			},
			{
				path: 'product/:productId',
				element: <ProductDetail />
			},
			{
				path: 'electronics',
				element: <Electronics />
			},
			{
				path: 'profile',
				element: <UserClass />
			}
		],
		errorElement: <Error />
	}
])

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
