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

/**
 * @swagger
 * components:
 *     schemas:
 *        Product:
 *           type: object
 *           properties:
 *              id:
 *                type: integer
 *                description: The product ID
 *                example: 1
 *              name:
 *                type: integer
 *                description: The product name
 *                example: Monitor curvo de 49 pulgadas
 *              price:
 *                type: number
 *                description: The product price
 *                example: 300
 *              availability:
 *                type: boolean
 *                description: The product availability
 *                example: true
 *
 *
 */

/**
 * @swagger
 * /api/products:
 *     get:
 *       summary: Get a list of products
 *       tags:
 *         - Products
 *       description: Return a list of products
 *       responses:
 *          200:
 *            description: Successful response
 *            content:
 *              application/json:
 *                 schema:
 *                    type: array
 *                    items:
 *                       $ref: '#/components/schemas/Product'
 *
 *
 *
 */

router.get('/', getProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags:
 *       - Products
 *     description: Return a product based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *
 *       400:
 *        description: Bad request - Invalid ID
 */

router.get(
	'/:id',

	param('id').isInt().withMessage('ID no valido'),
	handleImportErrors,
	getProductID
);

/**
 * @swagger
 * /api/products:
 *   post:
 *    summary: Creates a new product
 *    tags:
 *      - Products
 *    description: Return a new record in the database
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                    example: "TV"
 *                  price:
 *                    type: number
 *                    example: 800
 *    responses:
 *        201:
 *          description: Successfull response
 *          content:
 *            application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/Product'
 *        400:
 *          description: Bad request - Invalid input data
 *
 *
 */

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

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *    summary: Updates a product with user input
 *    tags:
 *      - Products
 *    description: Returns the updated product
 *    parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                    type: string
 *                    example: "TV"
 *                  price:
 *                    type: number
 *                    example: 800
 *                  availability:
 *                    type: boolean
 *                    example: true
 *    responses:
 *       200:
 *         description: Successfull response
 *         content:
 *           application/json:
 *                schema:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - Invalid ID or Invalid input data
 *       404:
 *         description: Product Not Found
 *
 */

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

/**
 * @swagger
 * /api/products/{id}:
 *    patch:
 *      summary: Update product availability
 *      tags:
 *        - Products
 *      description: Returns the updated availability
 *    parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *    responses:
 *       200:
 *         description: Successfull response
 *         content:
 *           application/json:
 *                schema:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - Invalid ID
 *       404:
 *         description: Product Not Found
 *
 *
 */

router.patch(
	'/',
	param('id').isInt().withMessage('ID no valido'),
	handleImportErrors,
	updateAvailability
);

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    summary: Deletes a product by a given ID
 *    tags:
 *      - Products
 *    description: Returns a confirmation message
 *    parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to delete
 *         required: true
 *         schema:
 *           type: integer
 *    responses:
 *       200:
 *         description: Successfull response
 *         content:
 *           application/json:
 *                schema:
 *                   type: string
 *                   value: Product removed
 *       400:
 *         description: Bad request - Invalid ID
 *       404:
 *         description: Product Not Found
 *
 *
 */

router.delete(
	'/:id',
	param('id').isInt().withMessage('ID no valido'),
	handleImportErrors,
	deleteProduct
);

export default router;