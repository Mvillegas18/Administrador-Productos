import { Link } from 'react-router-dom';

export function Product() {
	return (
		<div className='flex justify-between items-center'>
			<h2 className='text-4xl font-black text-slate-700'>Products</h2>
			<Link
				to={'/products/new'}
				className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all text-sm'>
				Add product
			</Link>
		</div>
	);
}
