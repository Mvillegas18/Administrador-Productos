import { Router } from 'express';
import { body } from 'express-validator';
import { createProduct } from './handlers/product';

const router = Router();

router.get('/', () => {});

router.post(
	'/',

	body('name').notEmpty().withMessage('El nombre del producto es obligatorio'),
	body('price')
		.isNumeric()
		.withMessage('Valor no valido')
		.notEmpty()
		.withMessage('El precio del producto es obligatorio')
		.custom((value) => value > 0)
		.withMessage('El precio debe ser mayor a 0'),

	createProduct
);

router.put('/', (req, res) => {
	res.json({ message: 'Desde PUT' });
});

router.patch('/', (req, res) => {
	res.json({ message: 'Desde PATCH' });
});

router.delete('/', (req, res) => {
	res.json({ message: 'Desde DELETE' });
});

export default router;
