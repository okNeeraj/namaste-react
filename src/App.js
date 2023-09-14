import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useOnlineStatus } from './utils/hooks';

/********* 01. Import pages a default import
 * 
 * import Home from "./components/pages/Home";
 * import BestSeller from "./components/pages/BestSeller";
 * import Electronics from "./components/pages/Electronics";
 * import ProductList from "./components/pages/ProductList";
 * import ProductDetail from "./components/pages/ProductDetail";
 * import UserClass from "./components/pages/UserClass";
 * import Error from "./components/pages/Error";
 * 
 */

/********* 02. Import all pages as named import from a single file (all page exported {default as PAGENAME} in index.js
 * 
 * import {
 *   Home,
 *   BestSeller,
 *   Electronics,
 *   ProductList,
 *   ProductDetail,
 *   UserClass,
 *   Error,
 * } from './components/pages';
 * 
 */

/********* 03. Import pages using lazy (Dynamic Import/On Demand Import)
 * 
 * const Home = lazy(() => import('./components/pages/Home'));
 * const BestSeller = lazy(() => import('./components/pages/BestSeller'));
 * const Electronics = lazy(() => import('./components/pages/Electronics'));
 * const ProductList = lazy(() => import('./components/pages/ProductList'));
 * const ProductDetail = lazy(() => import('./components/pages/ProductDetail'));
 * const UserClass = lazy(() => import('./components/pages/UserClass'));
 * const Error = lazy(() => import('./components/pages/Error'));
 * 
 */

import HocComponent from "./components/hoc/HocComponent";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const Home = lazy(() => import('./components/pages/Home'));
const BestSeller = lazy(() => import('./components/pages/BestSeller'));
const Electronics = lazy(() => import('./components/pages/Electronics'));
const ProductList = lazy(() => import('./components/pages/ProductList'));
const ProductDetail = lazy(() => import('./components/pages/ProductDetail'));
const UserClass = lazy(() => import('./components/pages/UserClass'));
const Cart = lazy(() => import('./components/pages/Cart'));
const Error = lazy(() => import('./components/pages/Error'));

const App = () => {
	const onlineStatus = useOnlineStatus();
	return (onlineStatus === false) ? <div className="text-center mt-5 pt-5"><h1>Look like, you are offline 🔴</h1><p>Please check your internet connection.</p></div> : (
		<Provider store={appStore}>
			<Header />
			<main className="page-container">
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</Provider>
	)
}

const Loading = () => {
	return (
		<div className="text-center mt-5 pt-5 mt-5 pb-5">
			<h1 className="">Loading...</h1>
		</div>
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
				path: 'checkout',
				element: <Cart />
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
