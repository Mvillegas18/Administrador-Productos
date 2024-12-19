import { Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<>
			<header className='bg-slate-700 mx-2 my-2 rounded-md flex justify-center'>
				<div className='max-w-6xl py-5'>
					<h1 className='text-4xl font-extrabold text-white'>
						Administrador de productos
					</h1>
				</div>
			</header>

			<main className='mt-10 mx-auto max-w-6xl p-10 shadow bg-white'>
				<Outlet />
			</main>
		</>
	);
}
