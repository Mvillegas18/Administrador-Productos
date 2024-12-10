import request from 'supertest';
import server from '../../server';

describe('POST /api/products', () => {
	it('Should display validation errors', async () => {
		const response = await request(server).post('/api/products').send({});

		expect(response.status).toBe(400);
		expect(response.body).toHaveProperty('errors');
		expect(response.body.errors).toHaveLength(4);

		expect(response.status).not.toBe(404);
		expect(response.body.errors).not.toHaveLength(2);
	});

	it('Should validate that the price is greater than 0', async () => {
		const response = await request(server).post('/api/products').send({
			name: 'pc',
			price: 0,
		});

		expect(response.status).toBe(400);
		expect(response.body).toHaveProperty('errors');
		expect(response.body.errors).toHaveLength(1);

		expect(response.status).not.toBe(404);
		expect(response.body.errors).not.toHaveLength(2);
	});

	it('Should create a new product', async () => {
		const response = await request(server).post('/api/products').send({
			name: 'Mouse',
			price: 365,
		});

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('product');

		expect(response.status).not.toBe(404);
		expect(response.status).not.toBe(400);
		expect(response.body).not.toHaveProperty('errors');
	});
});

describe('GET /api/products', () => {
	it('Get a json response with products', async () => {
		const response = await request(server).get('/api/products');

		expect(response.status).toBe(200);
		expect(response.headers['content-type']).toMatch(/json/);
		expect(response.body).toHaveProperty('data');
		expect(response.body.data).toBeTruthy();

		expect(response.status).not.toBe(404);
		expect(response.body.data).toBeTruthy();
		expect(response.body).not.toHaveProperty('errors');
	});
});
