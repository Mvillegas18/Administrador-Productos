import { Product } from '../types';
import { formatCurrency } from '../utils';

interface ProductDetailsProps {
	product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
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
		</div>
	);
};
