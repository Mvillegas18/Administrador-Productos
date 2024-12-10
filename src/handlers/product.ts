import { Request, RequestHandler, Response } from 'express';
import Product from '../models/Product.model';

export const getProduct: RequestHandler = async (
	req: Request,
	res: Response
) => {
	try {
		const products = await Product.findAll({
			order: [['price', 'DESC']],
		});

		res.json({ data: products });
	} catch (error) {
		console.log(error);
	}
};

export const getProductID: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const { id } = req.params;

	try {
		const product = await Product.findByPk(id);
		if (!product) {
			res.status(404).json({ error: 'Producto no encontrado' });
		}

		res.json({ data: product });
	} catch (error) {
		console.log(error);
	}
};

export const createProduct: RequestHandler = async (
	req: Request,
	res: Response
) => {
	try {
		const product = await Product.create(req.body);
		res.json({ product: product });
	} catch (error) {
		console.log(error);
	}
};

export const updateProduct = async (req: Request, res: Response) => {
	const { id } = req.params;

	const product = await Product.findByPk(id);
	if (!product) {
		res.status(404).json({ error: 'Producto no encontrado' });
	}

	await product?.update(req.body);
	await product?.save();

	res.status(200).json({ data: product });
};

export const updateAvailability = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;

		const product = await Product.findByPk(id);
		if (!product) {
			res.status(404).json({ error: 'Producto no encontrado' });
		}

		if (product) {
			product.availability = !product.dataValues.availability;
			await product?.save();
		}

		res.status(200).json({ data: product });
	} catch (error) {
		console.log(error);
	}
};

export const deleteProduct = async (req: Request, res: Response) => {
	const { id } = req.params;

	const product = await Product.findByPk(id);

	if (!product) {
		res.status(404).json({ error: 'Producto no encontrado' });
	}

	await product?.deletedAt();
	await product?.save();
};
