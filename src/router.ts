import { Router } from 'express';
import { body, param } from 'express-validator';
import {
	createProduct,
	deleteProduct,
	getProduct,
	getProductID,
	updateAvailability,
	updateProduct,
} from './handlers/product';
import { handleImportErrors } from './middleware';

const router = Router();

router.get('/', getProduct);

router.get(
	'/:id',

	param('id').isInt().withMessage('ID no valido'),
	handleImportErrors,
	getProductID
);

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

	handleImportErrors,
	createProduct
);

router.put(
	'/:id',

	body('name').notEmpty().withMessage('El nombre del producto es obligatorio'),
	body('price')
		.isNumeric()
		.withMessage('Valor no valido')
		.notEmpty()
		.withMessage('El precio del producto es obligatorio')
		.custom((value) => value > 0)
		.withMessage('El precio debe ser mayor a 0'),
	body('availability')
		.isBoolean()
		.withMessage('Valor para disponibilidad no valido'),
	handleImportErrors,

	updateProduct
);

router.patch('/', updateAvailability);

router.delete('/:id', deleteProduct);

export default router;
