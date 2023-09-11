import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
// import Grocery from './components/Grocery';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// LAZY loading - given to us by react,we can import it as a named import.
const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/restaurants/:resId',
				element: <RestaurantMenu />,
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
