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

const Home = lazy(() => import('./components/pages/Home'));
const BestSeller = lazy(() => import('./components/pages/BestSeller'));
const Electronics = lazy(() => import('./components/pages/Electronics'));
const ProductList = lazy(() => import('./components/pages/ProductList'));
const ProductDetail = lazy(() => import('./components/pages/ProductDetail'));
const UserClass = lazy(() => import('./components/pages/UserClass'));
const Error = lazy(() => import('./components/pages/Error'));

const App = () => {
	const onlineStatus = useOnlineStatus();
	return (onlineStatus === false) ? <div className="text-center mt-5 pt-5"><h1>Look like, you are offline 🔴</h1><p>Please check your internet connection.</p></div> : (
		<>
			{/* <Header />
			<main className="page-container">
				<Suspense fallback={<Loading />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer /> */}
			<TailwindComponent />
		</>
	)
}

const TailwindComponent = () => {
	return (
		<>
			<div className="container pt-24 mx-auto flex flex-wrap justify-center">
				<h1 className="text-5xl font-bold">This page is using TailwindCss</h1>
			</div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
						<div className="w-full sm:p-4 px-4 mb-6">
							<h1 className="title-font font-medium text-xl mb-2 text-gray-900">
								Moon hashtag pop-up try-hard offal truffaut
							</h1>
							<div className="leading-relaxed">
								Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.
							</div>
						</div>
						<div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
							<h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
							<p className="leading-relaxed">Users</p>
						</div>
						<div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
							<h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
							<p className="leading-relaxed">Subscribes</p>
						</div>
						<div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
							<h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
							<p className="leading-relaxed">Downloads</p>
						</div>
						<div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
							<h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
							<p className="leading-relaxed">Products</p>
						</div>
					</div>
					<div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
						<img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
					</div>
				</div>
			</section>

			<div className="bg-white">
				<div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
					<div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
						<svg
							viewBox="0 0 1024 1024"
							className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
							aria-hidden="true"
						>
							<circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
							<defs>
								<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
									<stop stopColor="#7775D6" />
									<stop offset={1} stopColor="#E935C1" />
								</radialGradient>
							</defs>
						</svg>
						<div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Boost your productivity.
								<br />
								Start using our app today.
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-300">
								Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
								<a
									href="#"
									className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
								>
									Get started
								</a>
								<a href="#" className="text-sm font-semibold leading-6 text-white">
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
						<div className="relative mt-16 h-80 lg:mt-8">
							<img
								className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
								src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
								alt="App screenshot"
								width={1824}
								height={1080}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
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
