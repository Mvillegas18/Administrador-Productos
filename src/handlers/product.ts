import { Request, RequestHandler, Response } from 'express';
import { validationResult } from 'express-validator';
import Product from '../models/Product.model';

export const createProduct: RequestHandler = async (
	req: Request,
	res: Response
) => {
	let errors = validationResult(req);

	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() });
		return;
	}

	const product = await Product.create(req.body);
	res.json({ product: product });
};
