import { ActionFunctionArgs, Form, Link, redirect } from 'react-router-dom';
import { addProduct } from '../services/productService';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }: ActionFunctionArgs) => {
	const data = Object.fromEntries(await request.formData());

	let error = '';
	if (Object.values(data).includes('')) {
		error = 'Todos los campos son obligatorios';
	}

	if (error.length) return error;

	await addProduct(data);

	return redirect('/');
};

export const EditProduct = () => {
	return (
		<div className='max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-bold text-slate-700 mb-6'>Edit Product</h2>
				<Link
					to={'/'}
					className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all text-sm'>
					Back to products
				</Link>
			</div>
			<Form className='space-y-4'>
				{/* Name Input */}
				<div className='relative'>
					<label
						htmlFor='name'
						className='block text-lg font-medium text-slate-700 mb-2'>
						Name
					</label>
					<input
						type='text'
						id='name'
						className='w-full rounded-lg border border-slate-300 bg-slate-50 py-4 px-6 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Enter the product name'
						required
					/>
				</div>

				{/* Price Input */}
				<div className='relative'>
					<label
						htmlFor='price'
						className='block text-lg font-medium text-slate-700 mb-2'>
						Price
					</label>
					<input
						type='number'
						id='price'
						className='w-full rounded-lg border border-slate-300 bg-slate-50 py-4 px-6 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Enter the product price'
						min='0'
						step='0.01'
						required
					/>
				</div>

				{/* Availability Checkbox */}
				<div className='flex items-center'>
					<input
						type='checkbox'
						id='available'
						className='h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
					/>
					<label
						htmlFor='available'
						className='ml-3 text-lg font-medium text-slate-700'>
						Available
					</label>
				</div>

				{/* Submit Button */}
				<div className='flex justify-end'>
					<button
						type='submit'
						className='bg-blue-600 text-white text-base px-6 py-3 rounded-lg hover:bg-blue-500 transition-all shadow-md'>
						Save Product
					</button>
				</div>
			</Form>
		</div>
	);
};
