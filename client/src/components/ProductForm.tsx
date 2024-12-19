export default function ProductForm() {
	return (
		<div className='max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md'>
			<form className='space-y-6'>
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
					<button
						type='submit'
						className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all font-semibold'>
						Add Product
					</button>
				</div>
			</form>
		</div>
	);
}
