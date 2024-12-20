import { useNavigate } from 'react-router-dom';
import { type Product } from '../types';
import { formatCurrency } from '../utils';

interface ProductDetailsProps {
	product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	const navigate = useNavigate();

	return (
		<div className='border border-slate-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow'>
			<h3 className='text-lg font-semibold text-slate-700'>{product.name}</h3>
			<p className='text-slate-600'>Price: {formatCurrency(product.price)}</p>
			<p
				className={`text-sm font-medium ${
					product.availability ? 'text-green-600' : 'text-red-600'
				}`}>
				{product.availability ? 'Available' : 'Unavailable'}
			</p>

			<div className='flex justify-end mt-4 gap-2'>
				<button
					onClick={() => navigate(`/products/${product.id}/edit`)}
					className='bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition-all text-sm'>
					Edit
				</button>
				<button
					onClick={() => {}}
					className='bg-red-700 text-white px-3 py-1 rounded-lg hover:bg-red-500 transition-all text-sm'>
					Delete
				</button>
			</div>
		</div>
	);
};
