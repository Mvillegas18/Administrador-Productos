import { Form } from 'react-router-dom';

export const action = async () => {
	console.log('desde action...');

	return {};
};

export const ProductForm = () => {
	return (
		<>
			<div className='max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md'>
				<Form
					className='space-y-6'
					method='POST'>
					{/* Name Field */}
					<div>
						<label
							htmlFor='name'
							className='block text-slate-600 font-medium mb-2'>
							Product Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='Enter product name'
							required
						/>
					</div>

					{/* Price Field */}
					<div>
						<label
							htmlFor='price'
							className='block text-slate-600 font-medium mb-2'>
							Price
						</label>
						<input
							type='number'
							id='price'
							name='price'
							className='w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
							placeholder='Enter product price'
							required
						/>
					</div>

					{/* Submit Button */}
					<div>
						<input
							type='submit'
							className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all font-semibold'
							value={'Add product'}
						/>
					</div>
				</Form>
			</div>
		</>
	);
};
