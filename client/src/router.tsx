import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import NewProduct from './views/NewProduct';
import Product from './views/Product';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Product />,
			},
			{
				path: 'products/new',
				element: <NewProduct />,
			},
		],
	},
]);
