import { createBrowserRouter } from 'react-router-dom';
import { action as newProductAction } from './components/ProductForm';
import { Layout } from './layouts/Layout';
import { NewProduct } from './views/NewProduct';
import { loader as productsLoader, Product } from './views/Product';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Product />,
				loader: productsLoader,
			},
			{
				path: 'products/new',
				element: <NewProduct />,
				action: newProductAction,
			},
		],
	},
]);
